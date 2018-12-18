/* eslint-disable no-console */
import chalk from 'chalk'
import app from './app'
import envVariables from '../config/envVariables'

const { environment, port } = envVariables

const printStartMessage = () => {
  let modeColorPrint = 'yellow'
  if (environment === 'production') {
    modeColorPrint = 'green'
  }
  console.log(chalk[modeColorPrint](`Started SMS API in ${environment} mode`))
  console.log(chalk.green(`SMS API is running on port: ${port}`))
}

app.listen(port, (error) => {
  if (error) {
    console.log(chalk.red(error))
  } else {
    printStartMessage()
  }
})
