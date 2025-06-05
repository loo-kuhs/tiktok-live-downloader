import puppeteer from 'puppeteer'
import { TIKTOK_UA } from "./constants"

/**
 * Fetches the HTML content from the specified URL.
 * @param {string} url - The URL to fetch the HTML from
 * @returns {Promise<string>} - A promise that resolves to the HTML content as a string
 */
export default async function fetchHTMLWithPuppeteer(
  url: string
): Promise<string> {
  console.warn(
    `\n⛔ Tiktok WAF detected. Don't worry, we will use Puppeteer to fetch the HTML!`
  )

  const newBrowser = await puppeteer.launch({
    /* headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'], */
    headless: false,
  })

  const page = await newBrowser.newPage()

  await page.setUserAgent(TIKTOK_UA)

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 })

  const html: string = await page.content()
  await newBrowser.close()

  console.info(`\n✅ Done! HTML fetched successfully.`)
  console.info(`\n✅ ${html.length} bytes fetched from ${url}`)

  return html
}
