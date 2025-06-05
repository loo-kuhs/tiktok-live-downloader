/**
 * It takes a string, checks if it starts with an @ symbol, and if it does, it returns the string
 * without the @ symbol
 * @param {string} username - The username to sanitize
 * @returns {string} string - The username without the @ symbol.
 */
export const sanitizeUsername = (username: string): string => {
  return username.startsWith('@') ? username.substring(1) : username
}
