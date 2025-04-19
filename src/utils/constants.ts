/**
 * Constant for User-Agent header. It is used to make requests to the TikTok API.
 */
export const userAgent: string =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

/**
 * It takes a string, checks if it starts with an @ symbol, and if it does, it returns the string
 * without the @ symbol
 * @param {string} username - The username to sanitize
 * @returns {string} string - The username without the @ symbol.
 */
export const sanitizeUsername = (username: string): string => {
  return username.startsWith('@') ? username.substring(1) : username
}

/**
 * It takes a string as an argument and returns a string
 * @param {string} username - The username of the TikTok account you want to get the live URL for.
 * @returns {string} string - The live URL of the TikTok account.
 */
export function newLiveUrl(username: string): string {
  return `https://www.tiktok.com/@${username}/live`
}

/**
 * It takes a string as an argument and returns a string.
 *
 * @param {number} aId - The aId of the TikTok live stream.
 * @param {string} roomId - The room ID of the live stream.
 * @returns {string} string - The API URL of the live stream.
 */
export const tiktokApi = (roomId: string): string => {
  return `https://www.tiktok.com/api/live/detail/?aid=1988&roomID=${roomId}`
}

/**
 * It takes the room ID of a TikTok live stream and returns the API URL of the live stream.
 *
 * @param {number} aId - The aId of the TikTok live stream.
 * @param {string} roomId - The room ID of the live stream.
 * @return {string} The API URL of the live stream.
 */
export const webcastTiktokApi = (roomId: string): string => {
  return `https://webcast.tiktok.com/webcast/room/info/?aid=1988&room_id=${roomId}`
}

/**
 * It takes a string as an argument and returns a string.
 *
 * @param {string} output - The output path for the downloaded live stream.
 * @param {string} username - The username of the TikTok account.
 * @param {string} format - The format of the downloaded live stream.
 * @returns {string} string - The name of the file to save the live stream to.
 */
export const fileNameOutput = (
  output: string,
  username: string,
  format: string
): string => {
  if (output.endsWith('.mp4') || output.endsWith('.mkv')) {
    return output
  }

  const sanitizedOutput: string = output.endsWith('/')
    ? output.slice(0, -1)
    : output

  const timeStamp: string = new Date().toLocaleString().replace(/[^\d]/g, '')

  return `${sanitizedOutput}/${username}-${timeStamp}.${format}`
}

/**
 * It takes a string as an argument and returns a string.
 *
 * @param {string} liveUrl - The live URL of the TikTok live stream.
 * @param {string} title - The title of the TikTok live stream.
 * @param {string} username - The username of the TikTok account.
 * @param {string} fileName - The name of the file to save the live stream to.
 * @returns {string} string - The ffmpeg command to download the live stream.
 */
export const ffmpegCommandMP4 = (
  liveUrl: string,
  title: string,
  username: string,
  fileName: string
): string => {
  const year = new Date().getFullYear()

  return `
ffmpeg \\
  -reconnect 1 \\                    # reintentar conexión ante fallo de red
  -reconnect_streamed 1 \\           # aplicar reintentos en streams no seekables
  -reconnect_at_eof 1 \\             # reintentar si llega un EOF inesperado
  -reconnect_delay_max 2000 \\       # retardo máximo entre reintentos (ms)
  -rw_timeout 8000000 \\             # timeout de I/O en µs (8s)
  -i "${liveUrl}" \\                 # fuente de entrada
  -movflags use_metadata_tags \\     # habilita metadata en el contenedor MP4
  -map_metadata 0 \\                 # copia toda la metadata desde la fuente
  -metadata title="${title}" \\      # etiqueta “title”
  -metadata artist="${username}" \\  # etiqueta “artist”
  -metadata year="${year}" \\        # etiqueta “year”
  -c copy \\                         # copia streams sin recodificar
  "${fileName}" \\                   # archivo de salida
  -n \\                              # no sobrescribir si existe
  -stats \\                          # mostrar progreso en consola
  -hide_banner \\                    # oculta el banner inicial de ffmpeg
  -loglevel error                    # sólo muestra errores
`.trim()
}

/**
 * It takes a string as an argument and returns a string.
 *
 * @param {string} liveUrl - The live URL of the TikTok live stream.
 * @param {string} fileName - The name of the file to save the live stream to.
 * @returns {string} string - The ffmpeg command to download the live stream.
 */
export const ffmpegCommandMKV = (liveUrl: string, fileName: string): string => {
  return `ffmpeg -i "${liveUrl}" -c:v hevc -crf 23 -c:a copy "${fileName}" -n -stats -hide_banner -loglevel error`
}
