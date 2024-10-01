import { Command } from 'commander'
import { OptionsProgram } from './types/OptionsProgram'
import { downloadLiveStream } from './helpers/downloadLiveStream'

const program = new Command()

program
  .argument('<username>', 'Username of tiktok user')
  .description('Download tiktok live stream')
  .option(
    '-o, --output [path]',
    `Output file or folder path (eg ./folder or ./folder/file.mp4)`,
    `downloads`
  )
  .option('-f, --format <format>', 'Output formats valid mp4 and mkv', 'mp4')
  .option('-d, --debug', 'output extra debugging')
  .action((username: string, options: OptionsProgram) => {
    const { output, format }: OptionsProgram = options

    console.info(`\n🔎 Searching ${username}'s live stream`)
    console.info(`💾 Output directory: ${output}`)
    console.info(`📹 Format video: ${format}\n`)

    downloadLiveStream(username, output, format).catch((err) => {
      console.error(err)
      process.exit(1)
    })
  })

program.parse(process.argv)
