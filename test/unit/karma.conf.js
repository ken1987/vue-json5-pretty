const webpackConfig = require('../../build/webpack.config.test')

module.exports = config => {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha'],
    reporters: ['progress'],
    files: ['specs/**/*.js'],
    preprocessors: {
      'specs/**/*.js': ['webpack']
    },
    logLevel: config.LOG_INFO,
    port: 9876,
    colors: true,
    singleRun: false,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
