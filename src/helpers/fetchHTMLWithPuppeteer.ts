import puppeteer from 'puppeteer'
import { userAgent } from '../utils/constants'

export default async function fetchHTMLWithPuppeteer(
  url: string
): Promise<string> {
  const newBrowser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await newBrowser.newPage()

  await page.setUserAgent(userAgent)

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })

  const html: string = await page.content()
  await newBrowser.close()

  console.info(`\n✅ ${html.length} bytes fetched from ${url}`)
  console.info(`\n✅ Fetched HTML with Puppeteer!`)

  return html
}
