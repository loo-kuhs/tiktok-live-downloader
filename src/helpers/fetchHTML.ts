/**
 * Fetches the HTML content of a given URL.
 *
 * @param {string} url The URL to fetch
 * @return {Promise<string>} The HTML content of the URL
 */
async function fetchHTML(url: string): Promise<string> {
  const body: string = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) ' +
        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9',
    },
  }).then((res) => res.text())

  console.info(`✅ ${body.length} bytes fetched from ${url}`)
  return body
}

export default fetchHTML
