import { launch } from 'puppeteer'
import TiktokCookie from '../tiktok/types/TikTokCookieInterface'

async function createCookie(): Promise<TiktokCookie[]> {
  console.info(`\n🍪 Creating cookie for API authentication...`)
  try {
    console.info(`\n🚀 Launching puppeteer to retrieve session cookie...`)

    const browser = await launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()

    await page.goto('https://www.tiktok.com/live', {
      waitUntil: ['domcontentloaded', 'networkidle2'],
    })

    const client = await page.target().createCDPSession()
    const cookies = (await client.send('Network.getAllCookies')).cookies

    await browser.close()

    console.info(`\n✅ Cookie successfully created for API usage.`)

    return cookies
  } catch (error) {
    throw new Error(`❌ Failed to create cookie. Error: ${error}`).message
  }
}

export default createCookie
