require('@babel/register')
const app = require('../../server/app').default
const envVariables = require('../envVariables').default

const { port } = envVariables
const setup = async () => {
  global.app = app.listen(port)
}

module.exports = setup
