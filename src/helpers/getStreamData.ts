import tiktokApi from '../api/tiktokApi'
import { LiveRoomInfo } from '../types/LiveRoomInfo'

/**
 * It takes a roomId, makes a request to the TikTok API, and returns the title and liveUrl of the room.
 * @param {string} roomId - The room ID of the live stream.
 * @returns {Promise<LiveRoomInfo>} Promise<LiveRoomInfo> - The title and liveUrl of the live stream.
 */
const getTitleAndLiveUrl = async (roomId: string): Promise<LiveRoomInfo> => {
  const response = await fetch(tiktokApi(roomId))
    .then((res) => res.json())
    .then((data) => data.body)

  const { title, liveUrl } = response

  return { title, liveUrl }
}

export default getTitleAndLiveUrl
