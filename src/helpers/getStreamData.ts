import tiktokApi from '../api/tiktokApi'
import { TikTokApiResponse, LiveRoomInfo } from '../types/TikTokApiInterface'

/**
 * It takes a roomId, makes a request to the tiktok api, and returns the response.
 *
 * @param {string} roomId - The room ID of the live stream.
 * @return {Promise<TikTokApiResponse>} - The response from the tiktok api.
 */
async function getTiktokApiResponse(
  roomId: string
): Promise<TikTokApiResponse> {
  const api = tiktokApi(roomId)
  const response = await fetch(api)
  const data = await response.json()

  const tiktokResponse: TikTokApiResponse = {
    LiveRoomInfo: data.LiveRoomInfo,
    extra: data.extra,
    log_pb: data.log_pb,
    statusCode: data.statusCode,
    status_code: data.status_code,
    status_msg: data.status_msg,
  }

  return tiktokResponse
}

/**
 * It takes a roomId, makes a request to the tiktok api, parses the response, and returns the
 * LiveRoomInfo object
 * @param {string} roomId - The room ID of the live stream.
 * @returns {Promise<LiveRoomInfo>} - The LiveRoomInfo object.
 */
async function getTitleAndLiveUrl(roomId: string): Promise<LiveRoomInfo> {
  const response = await getTiktokApiResponse(roomId)
  const { liveUrl, status } = response.LiveRoomInfo
  const onlineStatus = 2

  if (liveUrl === '' || status !== onlineStatus) {
    throw new Error(`\n❌ No url live stream found! This user is offline.`)
      .message
  }

  console.info(
    `\n✅ Found live stream: ${response.LiveRoomInfo.ownerInfo.nickname}! 🎉`
  )
  return response.LiveRoomInfo
}

export default getTitleAndLiveUrl
