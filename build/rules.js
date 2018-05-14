const styleLoaders = require('./style-rules')

module.exports = () => [
  {
    test: /\.vue$/,
    use: 'vue-loader'
  },
  {
    test: /\.js$/,
    use: ['babel-loader'],
    exclude: /node_modules/
  },
  ...styleLoaders()
]
