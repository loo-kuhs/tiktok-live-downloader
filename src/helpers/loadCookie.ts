import { readFileSync } from 'fs'
import TiktokCookie from '../types/TikTokCookieInterface'

export function loadCookie(): TiktokCookie[] {
  let cookiesData = readFileSync(`./session/cookie.txt`, 'utf8')
  let cookiesArray: TiktokCookie[] = JSON.parse(cookiesData)

  return cookiesArray
}

export function cookieToString(cookies: TiktokCookie[]): string {
  let cookiesArray = cookies

  let cookieString = cookiesArray
    .map(
      (cookie: { name: string; value: string }) =>
        `${cookie.name}=${cookie.value}`
    )
    .join('; ')

  console.info(`\n🍪 Cookie string created.`)

  return cookieString
}
