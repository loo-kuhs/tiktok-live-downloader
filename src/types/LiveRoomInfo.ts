export type TikTokApi = {
  LiveRoomInfo: LiveRoomInfo
}

export type LiveRoomInfo = {
  liveRoomStats: LiveRoomStats
  liveUrl: string
  ownerInfo: OwnerInfo
  roomID: string
  title: string
}

export type LiveRoomStats = {
  userCount: number
}

export type OwnerInfo = {
  id: string
  nickname: string
  signature: string
  uniqueId: string
}