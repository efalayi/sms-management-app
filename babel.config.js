const babelConfig = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          node: 'current',
        }
      },
    ],

  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ],
  ignore: [
    'node_modules',
  ]
}

module.exports = babelConfig
