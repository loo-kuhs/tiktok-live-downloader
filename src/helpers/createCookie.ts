import { launch } from 'puppeteer'

async function createCookie(): Promise<string> {
  console.info(`\n🍪 Creating cookie for API authentication...`)
  try {
    console.info(`\n🚀 Launching puppeteer to retrieve session cookie...`)

    const browser = await launch({
      headless: true,
      executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
      userDataDir: `${process.env.APPDATA}/Google/Chrome/User Data/Default`,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()

    await page.goto('https://www.tiktok.com/', {
      waitUntil: ['domcontentloaded', 'networkidle2'],
    })

    const client = await page.target().createCDPSession()
    const cookies = (await client.send('Network.getAllCookies')).cookies
    const cookie = cookies
      .map(
        (cookie: { name: string; value: string }) =>
          `${cookie.name}=${cookie.value}`
      )
      .join('; ')
    await browser.close()

    console.info(`\n✅ Cookie successfully created for API usage.`)
    return cookie
  } catch (error) {
    throw new Error(`❌ Failed to create cookie. Error: ${error}`).message
  }
}

export default createCookie
