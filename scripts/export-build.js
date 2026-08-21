const { spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const isVercel = process.env.VERCEL === '1'
const apiDir = path.join(process.cwd(), 'src', 'app', 'api')
const hiddenDir = path.join(process.cwd(), 'src', '.api-dev-only')

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: true,
    cwd: process.cwd(),
  })
  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

if (isVercel) {
  run('npx', ['next', 'build'])
  run('node', ['scripts/copy-env.js'])
  process.exit(0)
}

let moved = false
try {
  if (fs.existsSync(apiDir)) {
    if (fs.existsSync(hiddenDir)) {
      fs.rmSync(hiddenDir, { recursive: true, force: true })
    }
    fs.renameSync(apiDir, hiddenDir)
    moved = true
  }

  run('npx', ['next', 'build'])
  run('node', ['scripts/copy-env.js'])
} finally {
  if (moved && fs.existsSync(hiddenDir) && !fs.existsSync(apiDir)) {
    fs.renameSync(hiddenDir, apiDir)
  }
}
