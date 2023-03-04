import { program } from 'commander'
import { downloadLiveStream } from './helpers/downloadLiveStream.js'
import { errorLog, infoLog } from './utils/chalkConsole.js'

program
  .argument('<username>', `tiktok username`)
  .option(
    '--output <path>',
    `output file or folder path (eg ./folder or ./folder/file.mp4)`,
    `downloads`
  )
  .option('--format <format>', 'output format', 'mp4')
  .parse(process.argv)

const { output, format } = program.opts()
const username = program.args[0]

infoLog(`username: ${username}, output: ${output}, format: ${format}\n`)

downloadLiveStream(username, output, format).catch((err) => {
  errorLog(err)
  process.exit(1)
})
