const babelConfig = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          node: true,
        },
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
