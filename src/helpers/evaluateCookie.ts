import { existsSync } from 'fs'
import saveCookie from './saveCookie'
import { cookieToString, loadCookie } from './loadCookie'

async function evaluateCookie(): Promise<string> {
  const currentTimeUnix: number = Math.floor(Date.now() / 1000)

  if (!existsSync('./session/cookie.txt')) {
    console.info(`\n🍪 Cookie file not found. Creating new cookie.`)
    await saveCookie()
  }

  const cookiesArray = loadCookie()
  console.info(`\n🍪 Cookie loaded. Evaluating cookie...`)

  const isExpired = cookiesArray.some((cookie) => {
    if (cookie.name === 'msToken' && cookie.domain === 'www.tiktok.com') {
      return cookie.expires < currentTimeUnix
    }
    return false
  })

  if (isExpired) {
    console.info(`\n🍪 Cookie is expired. Creating new cookie.`)
    saveCookie()
  }

  const cookieString = cookieToString(loadCookie())

  return cookieString
}

export default evaluateCookie
