const glob = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (minify = false, chunks = []) => {
  const entry = {}
  const HtmlWebpackPlugins = []
  const template = path.resolve(__dirname, '../example/index.html')
  const files = glob.sync('example/main.js')
  files.forEach(item => {
    const name = 'index'
    entry[name] = `./${item}`

    HtmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template,
        inject: 'body',
        filename: `${name}.html`,
        chunks: chunks.concat(name),
        minify
      })
    )
  })

  return {
    entry,
    HtmlWebpackPlugins
  }
}
