const fs = require('fs')
const path = require('path')
const { spawnSync } = require('child_process')

const apiDir = path.join(process.cwd(), 'src', 'app', 'api')
const hiddenDir = path.join(process.cwd(), 'src', '.api-dev-only')

let moved = false

try {
  if (fs.existsSync(apiDir)) {
    if (fs.existsSync(hiddenDir)) {
      fs.rmSync(hiddenDir, { recursive: true, force: true })
    }
    fs.renameSync(apiDir, hiddenDir)
    moved = true
  }

  const build = spawnSync('npx', ['next', 'build'], {
    stdio: 'inherit',
    shell: true,
    cwd: process.cwd(),
  })
  if (build.status !== 0) {
    process.exit(build.status ?? 1)
  }

  const copy = spawnSync('node', ['scripts/copy-env.js'], {
    stdio: 'inherit',
    shell: true,
    cwd: process.cwd(),
  })
  process.exit(copy.status ?? 0)
} finally {
  if (moved && fs.existsSync(hiddenDir) && !fs.existsSync(apiDir)) {
    fs.renameSync(hiddenDir, apiDir)
  }
}
