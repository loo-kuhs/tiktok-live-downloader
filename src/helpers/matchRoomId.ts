function matchRoomId(extractedHTML: string): string {
  const liveRoomId = extractedHTML.match(/"roomId":"(\d+)"/) // "roomId":"7392776838324325xxx -- before: /room_id=(\d+)/

  if (!liveRoomId) {
    throw new Error('No live stream found')
  }

  console.info(`\n✅ Found live stream with room id ${liveRoomId[1]}! 🎉`)
  return liveRoomId[1]
}

export default matchRoomId