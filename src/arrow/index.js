export default {
  props: {
    prefix: String,
    disable: Boolean,
    open: Boolean
  },
  computed: {
    classNames() {
      const { prefix, disable, open } = this
      const name = `${prefix}-arrow`
      return [
        name,
        {
          [`${name}--disable`]: disable,
          [`${name}--open`]: open
        }
      ]
    }
  }
}
