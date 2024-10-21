export default interface TiktokCookie {
  name: string
  value: string
  domain: Domain
  path: Path
  expires: number
  size: number
  httpOnly: boolean
  secure: boolean
  session: boolean
  priority: Priority
  sameParty: boolean
  sourceScheme: SourceScheme
  sourcePort: number
  sameSite?: string
}

enum Domain {
  DomainWWWTiktokCOM = 'www.tiktok.com',
  TiktokCOM = '.tiktok.com',
  WWWTiktokCOM = '.www.tiktok.com',
}

enum Path {
  Empty = '/',
}

enum Priority {
  Medium = 'Medium',
}

enum SourceScheme {
  Secure = 'Secure',
}
