import createCookie from '../helpers/createCookie'
import { WebCastTikTokApiResponse } from '../types/WebCastTikTokApiInterface'
import { webcastTiktokApi } from '../utils/constants'

/**
 * It takes a roomId, makes a request to the tiktok api, and returns the response.
 *
 * @param {string} roomId - The room ID of the live stream.
 * @return {Promise<WebCastTikTokApiResponse>} - The response from the tiktok api.
 */
async function getWebCastTikTokApiResponse(
  roomId: string
): Promise<WebCastTikTokApiResponse> {
  const newCookie = await createCookie()
  const api = webcastTiktokApi(roomId)
  const response = await fetch(api, {
    headers: {
      cookie: newCookie,
    },
  })

  const data = await response.json()

  const tiktokResponse: WebCastTikTokApiResponse = {
    data: data.data,
    extra: data.extra,
    status_code: data.status_code,
  }

  return tiktokResponse
}

export default getWebCastTikTokApiResponse
