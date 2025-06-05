/**
 * It takes a string as an argument and returns a string.
 *
 * @param {string} output - The output path for the downloaded live stream.
 * @param {string} username - The username of the TikTok account.
 * @param {string} format - The format of the downloaded live stream.
 * @returns {string} string - The name of the file to save the live stream to.
 */

export const buildOutputName = (
  output: string,
  username: string,
  format: string
): string => {
  const now = new Date()

  const d: string = now.getDate().toString()
  const M: string = (now.getMonth() + 1).toString()
  const Y: string = now.getFullYear().toString()

  const HH: string = String(now.getHours()).padStart(2, '0')
  const mm: string = String(now.getMinutes()).padStart(2, '0')
  const ss: string = String(now.getSeconds()).padStart(2, '0')

  const sanitizedOutput: string = output.endsWith('/')
    ? output.slice(0, -1)
    : output

  const timeStamp: string = `${d}${M}${Y}${HH}${mm}${ss}`
  const outputName: string = `${sanitizedOutput}/${username}-${timeStamp}.${format}`

  return outputName
}
