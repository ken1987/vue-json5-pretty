export const typeOf = data => {
  if (data === null) {
    return 'null'
  }

  if (Array.isArray(data)) {
    return 'array'
  }

  // filter Symbol Function Date RegExp Error String Boolean Number
  const type = typeof data
  if (
    type === 'symbol' ||
    type === 'function' ||
    (type === 'object' && Object.prototype.toString.call(data) !== '[object Object]')
  ) {
    return ''
  }

  return type // undefined boolean string number object
}

export default () => {}
