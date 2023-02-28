import tiktokApi from '../api/tiktokApi'
import { LiveRoomInfo } from '../types/LiveRoomInfo'

/**
 * It takes a roomId, makes a request to the tiktok api, parses the response, and returns the
 * LiveRoomInfo object
 * @param {string} roomId - The room ID of the live stream.
 * @returns {Promise<LiveRoomInfo>} - The LiveRoomInfo object.
 */
async function getTitleAndLiveUrl(roomId: string): Promise<LiveRoomInfo> {
  const api = tiktokApi(roomId)
  const response = await fetch(api)
  const data = await response.json()

  return data.LiveRoomInfo
}

export default getTitleAndLiveUrl
