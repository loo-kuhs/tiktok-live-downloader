import { userAgent } from '../utils/constants'
import fetchHTMLWithPuppeteer from './fetchHTMLWithPuppeteer'

/**
 * Fetches the HTML content of a given URL.
 *
 * @param {string} url The URL to fetch
 * @return {Promise<string>} The HTML content of the URL
 */
export default async function fetchHTML(
  url: string,
  cookie: string
): Promise<string> {
  const body: string = await fetch(url, {
    headers: {
      cookies: cookie,
      'User-Agent': userAgent,
    },
  }).then((res) => res.text())

  const isWAF = body.includes('slardar') || body.includes('Please wait...')

  if (isWAF) {
    console.warn(
      `\n⛔ Tiktok WAF detected, don't worry, we will use Puppeteer to fetch the HTML!`
    )
    return await fetchHTMLWithPuppeteer(url)
  }

  console.info(`✅ ${body.length} bytes fetched from ${url}`)
  return body
}
