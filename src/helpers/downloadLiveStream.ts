import fs from 'fs'
import path from 'path'
import shell from 'shelljs'
import { infoLog, successLog, warningLog } from '../utils/chalkConsole.js'
import { newLiveUrl } from '../utils/constants.js'
import { sanitizeUsername } from '../utils/sanitizedUsername.js'
import getTitleAndLiveUrl from './getStreamData.js'

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
  successLog(`\nFound live stream with room id ${roomId}!`)

  const { title, liveUrl } = await getTitleAndLiveUrl(roomId)
  const fileName = output.endsWith(format)
    ? output
    : `${output.replace(
        /\/$/,
        ''
      )}/${sanitizedUsername}-${Date.now()}.${format}`
  const ffmpegCommand = `ffmpeg -i "${liveUrl}" -c copy "${fileName}" -n -nostats -hide_banner -loglevel error`

  fs.mkdirSync(path.dirname(fileName), { recursive: true })

  infoLog(`\nDownloading livestream ${title} to /${fileName}`)
  warningLog(`\nCtrl+C to stop downloading and exit`)
  shell.exec(ffmpegCommand, { async: true })
}
