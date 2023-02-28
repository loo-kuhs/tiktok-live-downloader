import fs from 'fs'
import path from 'path'
import shell from 'shelljs'
import { newLiveUrl } from '../utils/constants'
import { sanitizeUsername } from '../utils/sanitizedUsername'
import getTitleAndLiveUrl from './getStreamData'

export async function downloadLiveStream(
  username: string,
  output: string,
  format: string
): Promise<void> {
  if (format !== 'mp4') {
    throw new Error('Only mp4 format is supported')
  }

  const sanitizedUsername = sanitizeUsername(username)
  const liveUri = newLiveUrl(sanitizedUsername)

  const body = await fetch(liveUri).then((res) => res.text())

  const matchRoomId = body.match(/room_id=(\d+)/)
  if (!matchRoomId) {
    throw new Error('No live stream found')
  }

  const roomId = matchRoomId[1]
  console.log(roomId)

  const { title, liveUrl } = await getTitleAndLiveUrl(roomId)

  const fileName = output.endsWith(format)
    ? output
    : `${output.replace(
        /\/$/,
        ''
      )}/${sanitizedUsername}-${Date.now()}.${format}`
  const ffmpegCommand = `ffmpeg -i "${liveUrl}" -c copy "${fileName}"`

  fs.mkdirSync(path.dirname(fileName), { recursive: true })

  console.info(`Downloading livestream ${title} to ${fileName}`)
  shell.exec(ffmpegCommand)
}
