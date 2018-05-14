const getBaseConfig = require('./webpack.config.base')

module.exports = getBaseConfig(
  {
    commonChunks: ['manifest', 'vendors', 'commons']
  },
  {
    devtool: '#eval-source-map',
    output: {
      filename: '[name].js',
      publicPath: '/'
    },
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      },
      splitChunks: {
        chunks: 'initial',
        name: 'commons',
        cacheGroups: {
          vendors: {
            chunks: 'initial',
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/
          }
        }
      }
    },
    devServer: {
      hot: true,
      host: '0.0.0.0',
      disableHostCheck: true,
      compress: true,
      stats: {
        assets: true,
        colors: true,
        errors: true,
        errorDetails: true,
        hash: true
      }
    }
  }
)
