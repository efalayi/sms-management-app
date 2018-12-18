
const jestConfig = {
  bail: true,
  verbose: true,
  collectCoverageFrom: [
    '**/*.{js}',
    '!**/index.js',
    '!**/app.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/server/server.js',
  ],
  globals: {
    NODE_ENV: 'test'
  },
  globalSetup: '<rootDir>/config/jest/setup.js',
  globalTeardown: '<rootDir>/config/jest/tearDown.js',
  moduleFileExtensions: ['js'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: '<rootDir>/reports/junit'
    }]
  ],
  roots: ['<rootDir>/server/'],
  setupTestFrameworkScriptFile: '<rootDir>/config/jest/testFramework.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': '<rootDir>/config/jest/jest.transformer.js',
  }
}

module.exports = jestConfig
