import { join } from 'path'
import createCookie from './createCookie'
import { existsSync, mkdirSync, writeFileSync } from 'fs'

async function saveCookie(): Promise<void> {
  try {
    const sessionDir = join(process.cwd(), 'session')
    const cookieFilePath = join(sessionDir, 'cookie.txt')

    if (!existsSync(sessionDir)) {
      console.info(`\n📁 Directory not found. Creating 'session' directory...`)
      mkdirSync(sessionDir, { recursive: true })
      console.info(`\n📁 Directory 'session' created successfully.`)
    }

    const newCookie = await createCookie()
    const cookieString = JSON.stringify(newCookie, null, 2)

    console.info(`\n📝 Saving cookie to '${cookieFilePath}'`)

    writeFileSync(cookieFilePath, cookieString, { encoding: 'utf8' })

    console.info(`\n✅ Cookie successfully saved to file: ${cookieFilePath}`)
  } catch (error) {
    console.error(`\n❌ Error saving the cookie: ${error}`)
    throw new Error('Failed to save cookie.')
  }
}

export default saveCookie
