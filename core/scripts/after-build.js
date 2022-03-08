const path = require('path')
const fs = require('fs')
const glob = require('glob')

const matches = glob.sync(path.join(__dirname, '../..', 'out/**/*.html'))
const filesToMove = matches.filter(
  (f) => !(f.indexOf('404.html') >= 0 || f.indexOf('index.html') >= 0)
)
for (const file of filesToMove) {
  const dir = path.dirname(file)
  const name = path.basename(file).replace('.html', '')
  const newDir = path.join(dir, name)
  const newFile = path.join(newDir, 'index.html')
  if (!fs.existsSync(newDir)) fs.mkdirSync(newDir)
  fs.renameSync(file, newFile)
}

// Move logos of donations
const logosDest = path.join(__dirname, '../..', 'out/logos')
fs.mkdirSync(logosDest)
const logos = glob.sync(path.join(__dirname, '../..', 'donations/**/logo.png'))
for (const logo of logos) {
  const id = path.basename(path.dirname(logo)) * 1
  fs.copyFileSync(logo, path.join(logosDest, `${id}.png`))
}
