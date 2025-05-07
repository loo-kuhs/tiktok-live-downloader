import { WebCastTikTokApiResponse } from '../types/WebCastTikTokApiInterface'
import { userAgent, webcastTiktokApi } from '../utils/constants'
import saveInfoToFile from '../utils/saveInfoToFile'

/**
 * It takes a roomId, makes a request to the tiktok api, and returns the response.
 *
 * @param {string} roomId - The room ID of the live stream.
 * @param {string} cookie - The cookie to be able to make the request.
 * @return {Promise<WebCastTikTokApiResponse>} - The response from the tiktok api.
 */
async function getWebCastTikTokApiResponse(
  roomId: string,
  cookie: string
): Promise<WebCastTikTokApiResponse> {
  const api = webcastTiktokApi(roomId)
  const response = await fetch(api, {
    headers: {
      cookie: cookie,
      'User-Agent': userAgent,
    },
  })

  const data = await response.json()
  const tiktokResponse: WebCastTikTokApiResponse = {
    data:        data.data,
    extra:       data.extra,
    status_code: data.status,
  }

  return tiktokResponse
}

export default getWebCastTikTokApiResponse
