import fs from 'fs'
import path from 'path'
import shell, { ExecOptions, ExecCallback } from 'shelljs'
import {
  sanitizeUsername,
  newLiveUrl,
  fileNameOutput,
} from '../utils/constants'
import fetchHTML from './fetchHTML'
import { setStreamData } from './getStreamData'
import matchRoomId from './matchRoomId'
import { StreamData } from '../types/StreamData'
import buildFfmpegCommand from './buildFfmpegCommand'
import evaluateCookie from './evaluateCookie'

type ExecOptions = { async: boolean }

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
    const textHTML: string = await fetchHTML(liveUrl)
    const roomId: string = matchRoomId(textHTML)
    const newCookie: string = await evaluateCookie()

    const [streamData]: [StreamData] = await Promise.all([
      setStreamData(roomId, newCookie),
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

    shell.exec(
      ffmpegCommand,
      { async: true } as ExecOptions,
      (code: number, stdout: string, stderr: string) => {
        console.log(`Process exited with code ${code}`)
        if (stdout) console.log(`stdout: ${stdout}`)
        if (stderr) console.log(`stderr: ${stderr}`)
        process.exit(code)
      }
    )
  } catch (error) {
    throw new Error(`❌ Error: ${error}`).stack
  }
}
