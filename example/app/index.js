import Json5Pretty from '../../'

export default {
  components: {
    Json5Pretty
  },
  data() {
    return {
      openDep: 3,
      value: {
        undefined,
        null: null,
        string: 'string',
        number: 123,
        NaN,
        booleanTrue: true,
        booleanFalse: false,
        symbol: Symbol('symbol'),
        [Symbol('symbol')]: "Symbol('symbol')",
        object: {
          a: {
            b: {
              c: 'c'
            }
          }
        },
        array: [undefined, 1, 2],
        func: function func() {},
        arrowFunc: () => {},
        date: new Date(),
        reg: /^\.$/gi,
        error: new Error('error')
      }
    }
  }
}
