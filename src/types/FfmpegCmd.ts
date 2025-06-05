export interface FfmpegEvents {
  progress: (rawLine: string) => void
  exit: (code: number | null) => void
  error: (error: Error) => void
}

export interface FfmpegCmd {
  cmd: string
  args: string[]
}
