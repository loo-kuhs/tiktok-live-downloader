import getTiktokApiResponse from '../api/getTiktokApiResponse'
import getWebCastTikTokApiResponse from '../api/getWebCastTikTokApiResponse'
import { StreamData } from '../types/StreamData'

/**
 * It creates the stream data object with the stream url, title, user, status online, and if it's flv.
 *
 * @export
 * @param {string} roomId - The room ID of the live stream.
 * @return {Promise<StreamData>} - The StreamData object.
 * @throws {Error} - If the live stream url is empty or the user is offline.
 */
export async function setStreamData(roomId: string): Promise<StreamData> {
  const onlineStatus = 2
  const { liveUrl, liveTitle, liveUser, liveStatus } =
    await getM3u8LiveStreamInfo(roomId)
  const { streamUrlFlv, streamTitleFlv, usernameFlv, statusFlv } =
    await getFlvLiveStreamInfo(roomId)

  if (liveUrl === '' && streamUrlFlv === '') {
    throw new Error(
      `\n❌ No url live stream found! This user is offline or the live url is empty.`
    ).message
  }

  if (liveUrl !== '' && liveStatus === onlineStatus) {
    console.info(`\n✅ Found the live stream of: ${liveUser}! 🎉`)
    return {
      url: liveUrl,
      title: liveTitle,
      user: liveUser,
      statusOnline: liveStatus,
      isFlv: false,
    }
  } else if (streamUrlFlv !== '' && statusFlv === onlineStatus) {
    console.info(`\n✅ Found the live stream of: ${liveUser}! 🎉`)
    return {
      url: streamUrlFlv,
      title: streamTitleFlv,
      user: usernameFlv,
      statusOnline: statusFlv,
      isFlv: true,
    }
  } else {
    throw new Error(
      `\n❌ No url live stream found! This user is offline or the live url is empty.`
    ).message
  }
}

/**
 * It takes a roomId, makes a request to the tiktok api, parses the response, and returns the
 * LiveRoomInfo object
 * @param {string} roomId - The room ID of the live stream.
 * @returns {Promise<LiveRoomInfo>} - The LiveRoomInfo object.
 */
async function getM3u8LiveStreamInfo(roomId: string): Promise<{
  liveUrl: string
  liveTitle: string
  liveUser: string
  liveStatus: number
}> {
  const response = await getTiktokApiResponse(roomId)
  const liveStreamInfo = {
    liveUrl: response.LiveRoomInfo.liveUrl,
    liveTitle: response.LiveRoomInfo.title,
    liveUser: response.LiveRoomInfo.ownerInfo.nickname,
    liveStatus: response.LiveRoomInfo.status,
  }

  return liveStreamInfo
}

async function getFlvLiveStreamInfo(roomId: string): Promise<{
  streamUrlFlv: string
  streamTitleFlv: string
  usernameFlv: string
  statusFlv: number
}> {
  const response = await getWebCastTikTokApiResponse(roomId)
  const flvStreamInfo = {
    streamUrlFlv: response.data.stream_url.flv_pull_url.FULL_HD1,
    streamTitleFlv: response.data.title,
    statusFlv: response.data.status,
    usernameFlv: response.data.owner.nickname,
  }

  return flvStreamInfo
}
