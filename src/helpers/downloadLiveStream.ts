import fs from 'fs'
import path from 'path'
import shell from 'shelljs'
import { newLiveUrl } from '../utils/constants'
import { sanitizeUsername } from '../utils/sanitizeUsername'
import fetchHTML from './fetchHTML'
import getLiveInfo from './getStreamData'
import matchRoomId from './matchRoomId'

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
  const roomId = matchRoomId(textHTML)
  const { title, liveUrl } = await getLiveInfo(roomId)
  
  const fileName = output.endsWith(format)
    ? output
    : `${output.replace(
        /\/$/,
        ''
      )}/${sanitizedUsername}-${Date.now()}.${format}`
  const ffmpegCommand = `ffmpeg -i "${liveUrl}" -c copy "${fileName}" -n -stats -hide_banner -loglevel error`

  fs.mkdirSync(path.dirname(fileName), { recursive: true })

  console.info(`\n✅ Downloading livestream ${title} to ./${fileName}`)
  console.info(`\n❗ Ctrl+C to stop downloading and exit\n`)
  shell.exec(ffmpegCommand, { async: true })
}
