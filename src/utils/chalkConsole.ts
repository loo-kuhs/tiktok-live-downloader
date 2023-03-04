import chalk from 'chalk'

export const infoLog = (message: string) => {
  console.info(chalk.blue(message))
}

export const errorLog = (message: string) => {
  console.error(chalk.red(message))
}

export const successLog = (message: string) => {
  console.info(chalk.green(message))
}

export const warningLog = (message: string) => {
  console.info(chalk.yellow(message))
}

export const suggestionLog = (message: string) => {
  console.info(chalk.cyan(message))
}
