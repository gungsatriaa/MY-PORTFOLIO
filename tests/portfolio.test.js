import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import {
  categories,
  filterProjects,
  projects,
  profile,
  awards,
  certifications,
} from '../src/data/portfolio.js'

test('filter preserves all projects and returns only the selected category', () => {
  assert.deepEqual(filterProjects('Semua'), projects)
  for (const category of categories.slice(1)) {
    const result = filterProjects(category)
    assert.ok(result.length > 0)
    assert.ok(result.every((project) => project.category === category))
  }
  assert.deepEqual(filterProjects('unknown'), [])
  assert.equal(projects.length, 3)
})

test('project content has unique identifiers, descriptions, valid optional website links, and the supplied contact', () => {
  assert.equal(new Set(projects.map(({ id }) => id)).size, projects.length)
  for (const project of projects) {
    assert.ok(categories.includes(project.category))
    assert.ok(project.title.length > 0)
    assert.ok(project.description.length > 0)
    if (project.image) {
      assert.ok(
        existsSync(new URL(`../public${project.image}`, import.meta.url)),
      )
      assert.ok(project.imageAlt.length > 0)
    }
    for (const field of ['website', 'github']) {
      assert.ok(Object.hasOwn(project, field))
      if (project[field] !== null) {
        assert.ok(
          ['https:', 'http:'].includes(new URL(project[field]).protocol),
        )
      }
    }
  }
  assert.equal(new URL(profile.linkedin).hostname, 'www.linkedin.com')
  assert.equal(new URL(profile.linkedin).pathname, '/in/gungsatriaa/')
  assert.equal(new URL(profile.instagram).hostname, 'www.instagram.com')
  assert.equal(new URL(profile.instagram).pathname, '/gungsatriaaa0/')
  assert.equal(
    awards.find((award) => award.title.includes('Innovation')).date,
    null,
  )
  assert.equal(certifications.length, 6)
})

test('achievement image fields accept missing images and validate configured local files', () => {
  for (const item of [...awards, ...certifications]) {
    assert.ok(
      Object.hasOwn(item, 'image'),
      `Missing image field: ${item.title}`,
    )
    if (item.image === null) continue
    assert.equal(typeof item.image, 'string')
    assert.ok(
      item.image.startsWith('/images/'),
      `Use a public image path: ${item.title}`,
    )
    assert.ok(
      existsSync(new URL(`../public${item.image}`, import.meta.url)),
      `Image not found: ${item.image}`,
    )
  }
})
