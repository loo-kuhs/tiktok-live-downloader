import fs from 'fs'
import path from 'path'
import shell from 'shelljs'
import { newLiveUrl } from '../utils/constants'
import { sanitizeUsername } from '../utils/sanitizedUsername'
import fetchHTML from './fetchHTML'
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
  const textHTML = await fetchHTML(liveUri)

  const matchRoomId = textHTML.match(/"roomId":"(\d+)"/) // "roomId":"7392776838324325125 -- before: /room_id=(\d+)/
  if (!matchRoomId) {
    throw new Error('No live stream found')
  }

  const roomId = matchRoomId[1]
  console.info(`\nFound live stream with room id ${roomId}!`)

  const { title, liveUrl } = await getTitleAndLiveUrl(roomId)
  const fileName = output.endsWith(format)
    ? output
    : `${output.replace(
        /\/$/,
        ''
      )}/${sanitizedUsername}-${Date.now()}.${format}`
  const ffmpegCommand = `ffmpeg -i "${liveUrl}" -c copy "${fileName}" -n -nostats -hide_banner -loglevel error`

  fs.mkdirSync(path.dirname(fileName), { recursive: true })

  console.info(`\nDownloading livestream ${title} to /${fileName}`)
  console.info(`\nCtrl+C to stop downloading and exit`)
  shell.exec(ffmpegCommand, { async: true })
}
