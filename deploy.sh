#!/usr/bin/env bash
set -Eeuo pipefail

trap 'printf "Deploy berhenti karena langkah pada baris %s gagal.\n" "$LINENO" >&2' ERR
cd "$(dirname "${BASH_SOURCE[0]}")"

for command in git npm; do
  if ! command -v "$command" >/dev/null 2>&1; then
    printf 'Command %s belum tersedia.\n' "$command" >&2
    exit 1
  fi
done

if [[ "$(git rev-parse --show-toplevel)" != "$PWD" ]]; then
  printf 'Jalankan script dari repository portofolio ini.\n' >&2
  exit 1
fi
if [[ "$(git branch --show-current)" != main ]]; then
  printf 'Deploy produksi harus dari branch main.\n' >&2
  exit 1
fi
if [[ -n "$(git status --porcelain)" ]]; then
  printf 'Ada perubahan lokal. Commit atau simpan perubahan sebelum deploy.\n' >&2
  exit 1
fi

printf '\nMengambil pembaruan GitHub…\n'
git pull --ff-only origin main

printf '\nMemasang dependency dan memeriksa proyek…\n'
npm ci --include=dev
npm run lint
npm test
npm run build

printf '\nBuild siap disajikan aaPanel dari: %s/dist\n' "$PWD"
printf 'Pastikan document root website menunjuk folder tersebut.\n'
