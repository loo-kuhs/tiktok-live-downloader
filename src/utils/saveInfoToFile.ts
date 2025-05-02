import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

export default async function saveInfoToFile(
  filename: string,
  data: string
): Promise<void> {
  try {
    const timestamp = new Date().toISOString().replace(/:/g, '-')
    const formattedDate = timestamp.split('T')[0].replace(/-/g, '')
    const formattedTime = timestamp.split('T')[1].split('.')[0]
    const formattedFilename = `${filename}-${formattedTime}_${formattedDate}.log`

    const currentDir = join(process.cwd(), 'log_files')
    const filePath = join(currentDir, formattedFilename)

    if (!existsSync(currentDir)) {
      console.info(
        `\n📁 Directory not found. Creating 'log_files' directory...`
      )
      mkdirSync(currentDir, { recursive: true })
      console.info(`\n📁 Directory 'log_files' created successfully.`)
    }

    console.info(`\n📝 Saving data to '${filePath}'`)

    const fileContent = `# ${formattedFilename}\n\n${data}`

    writeFileSync(filePath, fileContent, { encoding: 'utf8' })

    console.info(`\n✅ Data successfully saved to file: ${filePath}`)
  } catch (error) {
    console.error(`\n❌ Error saving the file: ${error}`)
    throw new Error('Failed to save file.')
  }
}
