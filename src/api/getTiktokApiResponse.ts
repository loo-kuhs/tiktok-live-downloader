import { TikTokApiResponse } from '../types/TikTokApiInterface'
import { tiktokApi, userAgent } from '../utils/constants'

/**
 * It takes a roomId, makes a request to the tiktok api, and returns the response.
 *
 * @param {string} roomId - The room ID of the live stream.
 * @param {string} cookie - The cookie to be able to make the request.
 * @return {Promise<TikTokApiResponse>} - The response from the tiktok api.
 */
async function getTiktokApiResponse(
  roomId: string,
  cookie: string
): Promise<TikTokApiResponse> {
  const api = tiktokApi(roomId)
  const response = await fetch(api, {
    headers: {
      cookie: cookie,
      'User-Agent': userAgent,
    },
  })

  const data = await response.json()
  const tiktokResponse: TikTokApiResponse = {
    LiveRoomInfo: data.LiveRoomInfo,
    extra:        data.extra,
    log_pb:       data.log_pb,
    statusCode:   data.statusCode,
    status_code:  data.status_code,
    status_msg:   data.status_msg,
  }

  return tiktokResponse
}

export default getTiktokApiResponse
