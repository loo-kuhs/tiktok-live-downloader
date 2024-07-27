/**
 * Extracts the room id from the HTML body of the TikTok live stream page.
 *
 * @param {string} extractedHTML - The HTML body of the TikTok live stream page.
 * @return {string} - The room id of the live stream.
 */
function matchRoomId(extractedHTML: string): string {
  const liveRoomId = extractedHTML.match(/"roomId":"(\d+)"/) // "roomId":"7392776838324325xxx -- before: /room_id=(\d+)/

  if (!liveRoomId) {
    throw new Error('❌ No room id found!')
  }

  console.info(`\n✅ Found room id: ${liveRoomId[1]}! 🎉`)
  return liveRoomId[1]
}

export default matchRoomId