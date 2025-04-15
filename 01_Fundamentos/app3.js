const fs = require('fs')

const content = fs.readFileSync('readmeNode.md', 'utf8')

const wordCount = content.split(" ").length

const reactWordCount = content.match(/React/gi).length


console.log(`El archivo tiene ${wordCount} palabras y ${reactWordCount} veces la palabra React`);