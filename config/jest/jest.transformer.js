const babelJest = require('babel-jest')
const babelConfig = require('../../babel.config')

const transformer = babelJest.createTransformer(babelConfig)

module.exports = transformer
