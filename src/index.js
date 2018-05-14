import Arrow from './arrow/index.vue'
import Key from './key/index.vue'
import Value from './value/index.vue'
import { typeOf } from './utils'

const name = 'json5-pretty'

export default {
  name,
  components: {
    Arrow,
    Key,
    Value
  },
  props: {
    prefix: {
      type: String,
      default: name
    },
    openDep: {
      type: Number,
      default: 1
    },
    value: {},
    label: [String, Symbol],
    level: {
      type: Number,
      default: 1
    }
  },
  data() {
    const { openDep, level } = this
    const open = openDep >= level
    return {
      cache: open,
      open
    }
  },
  computed: {
    type() {
      return typeOf(this.value)
    },
    hasChild() {
      const { type } = this
      return type === 'object' || type === 'array'
    },
    items() {
      const { value, type } = this
      if (type === 'object') {
        return Object.keys(value)
          .sort()
          .map(label => {
            const v = value[label]
            return {
              value: v,
              label
            }
          })
      } else if (type === 'array') {
        return value.map((item, index) => ({
          value: item,
          label: String(index)
        }))
      }
      return value
    }
  },
  methods: {
    toggle() {
      if (!this.hasChild) return
      this.open = !this.open

      if (this.open) {
        this.cache = true
      }
    }
  }
}
