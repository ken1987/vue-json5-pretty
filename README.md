# vue-json5-pretty

Json5 pretty of Vue component

## what is json5

[https://json5.org](https://json5.org)

## Usage

```js
import Json5Pretty from 'vue-json5-pretty'

export default {
  component: {
    Json5Pretty
  },
  data() {
    return {
      prefix: 'json5-pretty',
      openDep: 3,
      value: {
        // comments
        unquoted: 'and you can quote me on that',
        singleQuotes: 'I can use "double quotes" here',
        lineBreaks:
          "Look, Mom! \
No \\n's!",
        hexadecimal: 0xdecaf,
        leadingDecimalPoint: 0.8675309,
        andTrailing: 8675309,
        positiveSign: +1,
        trailingComma: 'in objects',
        andIn: ['arrays'],
        backwardsCompatible: 'with JSON'
      }
    }
  }
}
```

```html
<Json5Pretty :value="value" :openDep="openDep" />
```

## Props

* [ label ] => data key.

* [ value ] => json5 data.

* [ openDep ] => by default, the depth of this tree will expand. default: 1.

* [ prefix ] => class prefix. default: 'json5-pretty'.

## Costom Style

```js
import Json5Pretty from 'vue-json5-pretty/src/index.vue'
import './path/to/your/style.less'

export default {
  component: {
    Json5Pretty
  }
}
```
