export default {
  props: {
    prefix: String,
    name: [String, Symbol]
  },
  computed: {
    classNames() {
      const { prefix } = this
      const name = `${prefix}-key`
      return [name]
    }
  }
}
