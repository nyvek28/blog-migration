const xml2js = require('xml2js')
const fs = require('fs')

const parser = new xml2js.Parser();

async function main() {
    const xml = await fs.promises.readFile(__dirname + '/../xml/wordpress.xml')
    const parsedXml = await parser.parseStringPromise(xml)
    const output = JSON.stringify(parsedXml, null, 2)
    await fs.promises.writeFile(__dirname + '/../output/output.json', output)
}

main()