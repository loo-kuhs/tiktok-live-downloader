import { program } from 'commander'
import fs from 'fs'
import fetch from 'node-fetch'
import path from 'path'
import shell from 'shelljs'
import { sanitizeUsername } from './utils/sanitizedUsername'
import { newLiveUrl } from './utils/constants'
import getTitleAndLiveUrl from './helpers/getStreamData'

async function downloadLiveStream(
  username: string,
  output: string,
  format: string
): Promise<void> {
  if (format !== 'mp4') {
    throw new Error('Only mp4 format is supported')
  }

  const sanitizedUsername = sanitizeUsername(username)
  const liveUrl = newLiveUrl(sanitizedUsername)

  const body = await fetch(liveUrl).then((res) => res.text())

  const matchRoomId = body.match(/room_id=(\d+)/)
  if (!matchRoomId) {
    throw new Error('No live stream found')
  }

  const roomId = matchRoomId[1]
  getTitleAndLiveUrl(roomId).then((data) => {
    console.log(data)
  })
}
