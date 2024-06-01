const fs = require('node:fs')
const path = require('node:path')
async function generateLanguageFiles() {
  fs.writeFileSync(
    path.join(
      process.cwd(),
      'src/dictionaries/defaultLanguageCollections',
      'default-en.ts',
    ),
    `export const en = {}
    `,
  )
  fs.writeFileSync(
    path.join(
      process.cwd(),
      'src/dictionaries/defaultLanguageCollections',
      'default-pt.ts',
    ),
    `export const pt = {}
    `,
  )
}

generateLanguageFiles()
