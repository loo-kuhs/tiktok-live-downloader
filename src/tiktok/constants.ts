/**
 * Constant for User-Agent header. It is used to make requests to the TikTok API.
 */
export const TIKTOK_UA: string =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36'

/**
 * It takes a string as an argument and returns a string
 * @param {string} username - The username of the TikTok account you want to get the live URL for.
 * @returns {string} string - The live URL of the TikTok account.
 */

export const newLiveUrl = (username: string): string => {
  return `https://www.tiktok.com/@${username}/live`
}

/**
 * It takes a roomId as an argument and returns a string
 * @param {string} roomId - The room ID of the TikTok live stream.
 * @returns {string} string - The TikTok Webcast API URL for the given room ID.
 */

export const TIKTOK_WEBCAST_API = (roomId: string): string => {
  return `https://webcast.tiktok.com/webcast/room/info/?aid=1988&room_id=${roomId}`
}
