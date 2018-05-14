const path = require('path')

const loaders = (loader, options) => {
  const arr = ['vue-style-loader']

  arr.push({
    loader: 'css-loader',
    options: {
      sourceMap: true
    }
  })

  arr.push({
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  })

  if (loader && loader !== 'css') {
    arr.push({
      loader: `${loader}-loader`,
      options: Object.assign(options, {
        sourceMap: true
      })
    })
  }

  return arr
}

module.exports = () =>
  [
    {
      loader: 'css'
    },
    {
      loader: 'less',
      options: {
        paths: [path.resolve(__dirname, '../src')]
      }
    }
  ].map(({ loader, options }) => {
    const use = loaders(loader, options)
    return {
      test: new RegExp(`\\.${loader}$`),
      use
    }
  })
