const fs = require('fs')

const data = fs.readFileSync('readmeNode.md', 'utf8')

const newData = data.replace(/React/ig, 'Angular')

fs.writeFileSync('readmeAngular.md', newData, 'utf8')

