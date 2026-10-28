import test from 'node:test'
import assert from 'node:assert/strict'
import {
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

function runDeploy(t, overrides = {}) {
  const directory = mkdtempSync(join(tmpdir(), 'portfolio-deploy-'))
  t.after(() => rmSync(directory, { recursive: true, force: true }))
  copyFileSync(new URL('../deploy.sh', import.meta.url), join(directory, 'deploy.sh'))
  const bin = join(directory, 'bin')
  mkdirSync(bin)
  const log = join(directory, 'commands.log')
  writeFileSync(log, '')
  const commands = {
    git: `case "$*" in
      'rev-parse --show-toplevel') printf '%s\\n' "$PWD" ;;
      'branch --show-current') printf '%s\\n' "$DEPLOY_TEST_BRANCH" ;;
      'status --porcelain') printf '%s' "$DEPLOY_TEST_DIRTY" ;;
      *) printf 'git %s\\n' "$*" >> "$DEPLOY_TEST_LOG"
         [[ "$DEPLOY_TEST_FAIL" != pull ]] ;;
    esac`,
    npm: `printf 'npm %s\\n' "$*" >> "$DEPLOY_TEST_LOG"
      [[ "$DEPLOY_TEST_FAIL" != "$*" ]]`,
  }
  for (const [name, body] of Object.entries(commands)) {
    writeFileSync(join(bin, name), `#!/bin/bash\n${body}\n`, { mode: 0o755 })
  }
  const result = spawnSync('/bin/bash', [join(directory, 'deploy.sh')], {
    encoding: 'utf8',
    env: {
      ...process.env,
      PATH: `${bin}:${process.env.PATH}`,
      DEPLOY_TEST_LOG: log,
      DEPLOY_TEST_BRANCH: 'main',
      DEPLOY_TEST_DIRTY: '',
      DEPLOY_TEST_FAIL: '',
      ...overrides,
    },
  })
  return {
    ...result,
    commands: readFileSync(log, 'utf8').trim().split('\n').filter(Boolean),
  }
}

test('deploy pulls fast-forward, validates, then builds the aaPanel document root', (t) => {
  const result = runDeploy(t)
  assert.equal(result.status, 0, result.stderr)
  assert.match(result.stdout, /Build siap disajikan aaPanel/)
  assert.deepEqual(result.commands, [
    'git pull --ff-only origin main',
    'npm ci --include=dev',
    'npm run lint',
    'npm test',
    'npm run build',
  ])
})

test('dirty changes and another branch stop before pull', (t) => {
  for (const environment of [
    { DEPLOY_TEST_DIRTY: ' M src/App.jsx' },
    { DEPLOY_TEST_BRANCH: 'feature' },
  ]) {
    const result = runDeploy(t, environment)
    assert.notEqual(result.status, 0)
    assert.deepEqual(result.commands, [])
  }
})

test('failed pull, install, checks, or build never report a successful deployment', (t) => {
  for (const step of ['pull', 'ci --include=dev', 'run lint', 'test', 'run build']) {
    const result = runDeploy(t, { DEPLOY_TEST_FAIL: step })
    assert.notEqual(result.status, 0)
    assert.doesNotMatch(result.stdout, /Build siap disajikan aaPanel/)
  }
})
