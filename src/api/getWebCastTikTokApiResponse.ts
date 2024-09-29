import { WebCastTikTokApiResponse } from '../types/WebCastTikTokApiInterface'
import { webcastTiktokApi } from '../utils/constants'
import path from 'path'

/**
 * It takes a roomId, makes a request to the tiktok api, and returns the response.
 *
 * @param {string} roomId - The room ID of the live stream.
 * @return {Promise<WebCastTikTokApiResponse>} - The response from the tiktok api.
 */
async function getWebCastTikTokApiResponse(
  roomId: string
): Promise<WebCastTikTokApiResponse> {
  const api = webcastTiktokApi(roomId)
  const response = await fetch(api, {
    headers: {
      authority: 'webcast.tiktok.com',
      method: 'GET',
      path: path.join('/webcast/room/info/?aid=1988&room_id=', roomId),
      scheme: 'https',
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language':
        'en-GB,en;q=0.9,es-MX;q=0.8,es;q=0.7,ja-JP;q=0.6,ja;q=0.5,es-US;q=0.4,en-US;q=0.3',
      'cache-control': 'max-age=0',
      cookie: '',
      priority: 'u=0, i',
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
