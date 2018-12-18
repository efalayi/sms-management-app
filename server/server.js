/* eslint-disable no-console */
import chalk from 'chalk'
import app from './app'
import envVariables from '../config/envVariables'

const { environment, PORT } = envVariables

const printStartMessage = () => {
  let modeColorPrint = 'yellow'
  if (environment === 'production') {
    modeColorPrint = 'green'
  }
  console.log(chalk[modeColorPrint](`Started SMS API in ${environment} mode`))
  console.log(chalk.green(`SMS API is running on port: ${PORT}`))
}

app.listen(PORT, (error) => {
  if (error) {
    console.log(chalk.red(error))
  } else {
    printStartMessage()
  }
})
