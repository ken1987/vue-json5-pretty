export default {
  props: {
    prefix: String,
    type: String,
    value: {}
  },
  computed: {
    classNames() {
      const { prefix } = this
      const name = `${prefix}-value`
      return [name]
    },
    text() {
      const { type, value } = this

      if (type === 'object') {
        return 'Object'
      }

      if (type === 'array') {
        return `Array(${value.length})`
      }

      const v = String(value)
      const { classNames } = this
      const wrap = (text, color) => `<span class="${classNames}__${color}">${text}</span>`

      if (type === 'boolean' || type === 'number') {
        return wrap(v, 'blue')
      }

      if (type === 'null' || type === 'undefined') {
        return wrap(v, 'gray')
      }

      if (type === 'string') {
        return `"${wrap(v, 'red')}"`
      }

      return ''
    }
  }
}
