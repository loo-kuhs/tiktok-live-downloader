import fs from 'fs'
import path from 'path'
import shell from 'shelljs'
import {
  sanitizeUsername,
  newLiveUrl,
  fileNameOutput,
  ffmpegCommandMP4,
  ffmpegCommandMKV,
} from '../utils/constants'
import fetchHTML from './fetchHTML'
import { setStreamData } from './getStreamData'
import matchRoomId from './matchRoomId'

export async function downloadLiveStream(
  username: string,
  output: string,
  format: string
): Promise<void> {
  const acceptedFormats = ['mp4', 'mkv']
  const sanitizedUsername = sanitizeUsername(username)
  const liveUri = newLiveUrl(sanitizedUsername)
  const textHTML = await fetchHTML(liveUri)
  const roomId = matchRoomId(textHTML)
  const { url, title, user, isFlv } = await setStreamData(roomId)
  const fileName = fileNameOutput(output, sanitizedUsername, format)
  let ffmpegCommand = ''

  if (acceptedFormats.includes(format) && !isFlv) {
    ffmpegCommand =
      format === 'mp4'
        ? ffmpegCommandMP4(url, title, sanitizedUsername, fileName)
        : ffmpegCommandMKV(url, fileName)
  } else if (format === 'mp4' && isFlv) {
    ffmpegCommand = ffmpegCommandMKV(url, fileName)
  } else {
    throw new Error(`\n❌ Invalid format: ${format}. Use mp4 or mkv formats.`)
      .message
  }

  fs.mkdirSync(path.dirname(fileName), { recursive: true })

  console.info(`\n✅ Downloading livestream ${title} to ./${fileName}`)
  console.info(`\n❗ Ctrl+C to stop downloading and exit\n`)
  shell.exec(ffmpegCommand, { async: true })
}
