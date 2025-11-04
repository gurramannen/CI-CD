const swaggerJSDoc = require('swagger-jsdoc')
const fs = require('fs')
const path = require('path')
const config = require('./swaggerConfig')

const outputDir = path.join(__dirname, 'api', 'docs')
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })

const openapiSpec = swaggerJSDoc(config)
fs.writeFileSync(path.join(outputDir, 'openapi.json'), JSON.stringify(openapiSpec, null, 2))
console.log('OpenAPI spec generated at', path.join(outputDir, 'openapi.json'))
