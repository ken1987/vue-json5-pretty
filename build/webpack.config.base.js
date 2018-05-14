const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const getEntry = require('./entry')
const { resolve } = require('./resolve')
const getRules = require('./rules')

module.exports = (options = {}, webpackOptions = {}, isTest) => {
  const newOptions = {}
  const { htmlMinifyOptions, commonChunks } = options
  const { mode = 'development', output } = webpackOptions
  let { plugins = [] } = webpackOptions

  if (!isTest) {
    const { entry, HtmlWebpackPlugins } = getEntry(htmlMinifyOptions, commonChunks)

    plugins = plugins.concat(HtmlWebpackPlugins)

    newOptions.entry = entry
    newOptions.output = {
      ...output,
      path: path.resolve(__dirname, '../dist')
    }
  }

  plugins.push(
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode)
    })
  )

  const c = {
    ...webpackOptions,
    ...newOptions,
    mode,
    resolve,
    plugins,
    module: {
      rules: getRules()
    }
  }
  return c
}
