import getWebCastTikTokApiResponse from '../api/getWebCastTikTokApiResponse'
import { StreamData, StreamInfo } from '../types/StreamData'

/**
 * It creates the stream data object with the stream url, title, user, status online, and if it's flv.
 *
 * @export
 * @param {string} roomId - The room ID of the live stream.
 * @return {Promise<StreamData>} - The StreamData object.
 * @throws {Error} - If the live stream url is empty or the user is offline.
 */
export default async function setStreamData(
  roomId: string,
  cookie: string
): Promise<StreamData> {
  const [flvInfo] = await Promise.all([getStreamInfo(roomId, cookie, 'FLV')])
  const onlineStatus = 2

  if (!flvInfo.liveUrl) {
    throw new Error(`❌ The user is offline or the live stream url is empty!`)
      .message
  }

  if (flvInfo.liveUrl && flvInfo.liveStatus === onlineStatus) {
    console.info(`\n✅ Found ${flvInfo.liveUser} live stream url! 🎉`)
    return {
      url: flvInfo.liveUrl,
      title: flvInfo.liveTitle,
      user: flvInfo.liveUser,
      statusOnline: flvInfo.liveStatus,
      isFlv: true,
    }
  }

  throw new Error(
    `\n❌ No url live stream found! This user is offline or the live url is empty.\n`
  ).message
}

async function getStreamInfo(
  roomId: string,
  cookie: string,
  type: 'FLV'
): Promise<StreamInfo> {
  let response = await getWebCastTikTokApiResponse(roomId, cookie)
  return {
    liveUrl:
      response.data.stream_url.flv_pull_url.FULL_HD1 ||
      response.data.stream_url.flv_pull_url.HD1,
    liveTitle: response.data.title,
    liveUser: response.data.owner.nickname,
    liveStatus: response.data.status,
  }
}
