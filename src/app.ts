import { Command } from 'commander'
import { downloadLiveStream } from './helpers/downloadLiveStream'

const program = new Command()

interface OptionsProgram {
  output: string
  format: string
  debug: boolean
}

program
  .argument('<username>', 'username of tiktok user')
  .description('download tiktok live stream')
  .option(
    '-o, --output [path]',
    `output file or folder path (eg ./folder or ./folder/file.mp4)`,
    `downloads`
  )
  .option('-f, --format <format>', 'output format', 'mp4')
  .option('-d, --debug', 'output extra debugging')
  .action((username: string, options: OptionsProgram) => {
    const { output, format } = options
    console.info(`\n✅ Searching user's live stream: ${username}`)
    console.info(`💾 Output directory: ${output}`)
    console.info(`📹 Format video: ${format}\n`)

    downloadLiveStream(username, output, format).catch((err) => {
      console.error(err)
      process.exit(1)
    })
  })

program.parse(process.argv)
