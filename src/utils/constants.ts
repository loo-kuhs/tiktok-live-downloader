/**
 * It takes a string as an argument and returns a string
 * @param {string} username - The username of the TikTok account you want to get the live URL for.
 * @returns {string} string - The live URL of the TikTok account.
 */
export function newLiveUrl(username: string): string {
  return `https://www.tiktok.com/@${username}/live`
}
