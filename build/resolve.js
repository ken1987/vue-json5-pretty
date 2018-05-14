// 单独提取出来，作为 .eslintrc 的配置

const path = require('path')

module.exports = {
  resolve: {
    modules: ['node_modules'],
    alias: {
      '@src': path.resolve(__dirname, '../src')
    }
  }
}
