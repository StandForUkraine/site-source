const path = require('path')
const fs = require('fs')
const glob = require('glob')

glob(path.join(__dirname, 'out/**/*.html'), (err, matches) => {
    const filesToMove = matches.filter(f => !(f.indexOf('404.html') >= 0 || f.indexOf('index.html') >= 0))
    for (const file of filesToMove) {
        const dir = path.dirname(file)
        const name = path.basename(file).replace('.html', '')
        const newDir = path.join(dir, name)
        const newFile = path.join(newDir, 'index.html')
        if (!fs.existsSync(newDir)) fs.mkdirSync(newDir)
        fs.renameSync(file, newFile)
    }
})
