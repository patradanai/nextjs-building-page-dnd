/* eslint-disable no-console */
import fs from 'node:fs'
import path from 'node:path'

const projectName = process.argv[2]?.trim()

if (!projectName) {
    console.error('Usage: npm run init:template -- <project-name>')
    process.exit(1)
}

const packageJsonPath = path.join(process.cwd(), 'package.json')
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

packageJson.name = projectName

fs.writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 4)}\n`)

console.log(`Updated package.json name to "${projectName}"`)
console.log('Next steps:')
console.log('- Update README.md title and project description')
console.log('- Update .env.local values for your app')
console.log('- Replace logos, metadata, and demo content')
