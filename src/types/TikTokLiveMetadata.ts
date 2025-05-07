export interface TikTokLiveMetadata {
  roomId: string
  title: string
  isLive: boolean
  isReplay: boolean
  ageRestricted: boolean
  creator: {
    nickname: string
    displayId: string
    userId: string
    secUid: string
    bio: string
    avatar: string
    followers: number
    following: number
    verified: boolean
  }
  stats: {
    viewers: number
    replayViewers: number
    likes: number
    shares: number
    fanTickets: number
  }
  streamUrls: {
    flv: Record<string, string>
    hls: string
  }
  topFans: {
    nickname: string
    displayId: string
    fanTickets: number
    avatar: string
  }[]
}
