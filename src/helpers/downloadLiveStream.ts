import fs from 'fs'
import path from 'path'
import shell from 'shelljs'
import fetch from 'node-fetch'
import { infoLog, successLog, warningLog } from '../utils/chalkConsole.js'
import { newLiveUrl } from '../utils/constants.js'
import { sanitizeUsername } from '../utils/sanitizedUsername.js'
import getTitleAndLiveUrl from './getStreamData.js'

async function fetchHTML(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36',
    },
  })
  const body = await response.text()

  return body
}

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
  const matchRoomId = textHTML.match(/room_id=(\d+)/)

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
