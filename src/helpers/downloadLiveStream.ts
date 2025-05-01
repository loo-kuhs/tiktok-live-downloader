import fs from 'fs'
import path from 'path'
import shell from 'shelljs'
import {
  sanitizeUsername,
  newLiveUrl,
  fileNameOutput,
} from '../utils/constants'
import fetchHTML from './fetchHTML'
import setStreamData from './getStreamData'
import matchRoomId from './matchRoomId'
import { StreamData } from '../types/StreamData'
import buildFfmpegCommand from './buildFfmpegCommand'
import evaluateCookie from './evaluateCookie'

export async function downloadLiveStream(
  username: string,
  output: string,
  format: string
): Promise<void> {
  if (!username) {
    throw new Error(`❌ The username is empty!`).message
  }

  const acceptedFormats: string[] = ['mp4', 'mkv']

  if (!acceptedFormats.includes(format)) {
    throw new Error(
      `❌ The format ${format} is not valid! Please use mp4 or mkv.`
    ).message
  }

  try {
    const sanitizedUsername: string = sanitizeUsername(username)
    const liveUrl: string = newLiveUrl(sanitizedUsername)
    const myCookie: string = await evaluateCookie()
    const textHTML: string = await fetchHTML(liveUrl, myCookie)
    const roomId: string = matchRoomId(textHTML)

    const [streamData]: [StreamData] = await Promise.all([
      setStreamData(roomId, myCookie),
    ])

    const { url, title, isFlv }: StreamData = streamData

    let fileName: string = fileNameOutput(output, sanitizedUsername, format)
    let ffmpegCommand: string = buildFfmpegCommand(
      url,
      title,
      sanitizedUsername,
      fileName,
      format,
      isFlv
    )

    fs.mkdirSync(path.dirname(fileName), { recursive: true })

    console.info(`\n✅ Downloading livestream ${title} to ./${fileName}`)
    console.info(`\n❗ Ctrl+C to stop downloading and exit\n`)

    const runShell = shell.exec(ffmpegCommand, { async: true })

    runShell.stdout.on('data', (data: string) => {
      console.info(` ${data}`)
    })
    runShell.stderr.on('data', (data: string) => {
      if (data.includes('error')) {
        console.error(`\r❌ ${data}`)
      }
    })
    runShell.on('exit', (code: number) => {
      if (code === 0) {
        console.info(`\n✅ Download completed!`)
      } else {
        console.error(`❌ Error: ${code}`)
      }
    })
  } catch (error) {
    throw new Error(`❌ Error: ${error}`).stack
  }
}
