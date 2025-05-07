import { appendFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

/**+
 * Dev function to save data to a file.
 * It creates a directory called 'log_files' if it doesn't exist and saves the data to a file with a timestamp.
 * @param {string} filename - The name of the file to save the data to.
 * @param {string | object | number | boolean} data - The data to save to the file.
 * @returns {Promise<void>} - A promise that resolves when the data has been saved to the file.
 */
export default async function saveInfoToFile(
  filename: string,
  data: string | object | number | boolean
): Promise<void> {
  try {
    const timestamp = new Date().toISOString().replace(/:/g, '')
    const formattedDate = timestamp.split('T')[0].replace(/-/g, '')
    const formattedFilename = `${filename}-${formattedDate}.log`

    const currentDir = join(process.cwd(), 'log_files')
    const filePath = join(currentDir, formattedFilename)

    if (!existsSync(currentDir)) {
      console.info(
        `\n📁 Directory not found. Creating 'log_files' directory...`
      )
      mkdirSync(currentDir, { recursive: true })
      console.info(`\n📁 Directory 'log_files' created successfully.`)
    }

    console.info(`\n💾 Saving data to '${filePath}'`)

    const fileContent = `\n# ${formattedFilename}\n${manageDataByType(data)}`

    appendFileSync(filePath, fileContent + '\n', { encoding: 'utf8' })

    console.info(`\n✅ Data successfully saved to file: ${filePath}`)
  } catch (error) {
    console.error(`\n❌ Error saving the file: ${error}`)
    throw new Error('Failed to save file.')
  }
}

function manageDataByType(data: any): string {
  if (typeof data === 'string') {
    return data
  } else if (typeof data === 'object') {
    return JSON.stringify(data, null, 2)
  } else {
    return String(data)
  }
}
