/**
 * It takes a string as an argument and returns a string.
 * @param {string} roomId - The room ID of the live stream.
 * @returns {string} string - The API URL of the live stream.
 */
const tiktokApi = (roomId: string): string => {
  return `https://www.tiktok.com/api/live/detail/?aid=1988&roomID=${roomId}`
}

export default tiktokApi
