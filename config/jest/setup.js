require('@babel/register')
const app = require('../../server/app').default
const envVariables = require('../envVariables').default

const { PORT } = envVariables
const setup = async () => {
  global.app = app.listen(PORT)
}

module.exports = setup
