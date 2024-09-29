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
import { StreamData } from '../types/StreamData'

export async function downloadLiveStream(
  username: string,
  output: string,
  format: string
): Promise<void> {
  const acceptedFormats: string[] = ['mp4', 'mkv']
  const sanitizedUsername: string = sanitizeUsername(username)
  const liveUri: string = newLiveUrl(sanitizedUsername)
  const textHTML: string = await fetchHTML(liveUri)
  const roomId: string = matchRoomId(textHTML)
  const { url, title, isFlv }: StreamData = await setStreamData(roomId)
  let fileName: string = fileNameOutput(output, sanitizedUsername, format)
  let ffmpegCommand: string = ''

  if (acceptedFormats.includes(format) && !isFlv) {
    ffmpegCommand =
      format === 'mp4'
        ? ffmpegCommandMP4(url, title, sanitizedUsername, fileName)
        : ffmpegCommandMKV(url, fileName)
  } else if (format === 'mp4' && isFlv) {
    fileName = fileNameOutput(output, sanitizedUsername, 'mkv')
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
