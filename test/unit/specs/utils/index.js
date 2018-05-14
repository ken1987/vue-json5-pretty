import { typeOf } from '@src/utils'
import { assert } from 'chai'

/* eslint-disable no-new-wrappers */
describe('utils/format-date', () => {
  it('空字符串的类型是 string', () => {
    assert.equal(typeOf(''), 'string')
  })

  it("'string' 的类型是 string", () => {
    assert.equal(typeOf('string'), 'string')
  })

  it('true 的类型是 boolean', () => {
    assert.equal(typeOf(true), 'boolean')
  })

  it('false 的类型是 boolean', () => {
    assert.equal(typeOf(false), 'boolean')
  })

  it('NaN 的类型是 number', () => {
    assert.equal(typeOf(NaN), 'number')
  })

  it('123 的类型是 number', () => {
    assert.equal(typeOf(123), 'number')
  })

  it('Infinity 的类型是 number', () => {
    assert.equal(typeOf(Infinity), 'number')
  })

  it('null 的类型是 null', () => {
    assert.equal(typeOf(null), 'null')
  })

  it('undefined 的类型是 undefined', () => {
    assert.equal(typeOf(undefined), 'undefined')
  })

  it('[] 的类型是 array', () => {
    assert.equal(typeOf([]), 'array')
  })

  it('[1,2,3] 的类型是 array', () => {
    assert.equal(typeOf([1, 2, 3]), 'array')
  })

  it('{} 的类型是 object', () => {
    assert.equal(typeOf({}), 'object')
  })

  it('{a: {b: 1}} 的类型是 object', () => {
    assert.equal(typeOf({ a: { b: 1 } }), 'object')
  })

  it('不支持 Symbol 类型', () => {
    assert.equal(typeOf(Symbol('')), '')
  })

  it('不支持函数', () => {
    assert.equal(typeOf(() => {}), '')
  })

  it('不支持 String 对象', () => {
    assert.equal(typeOf(new String('string')), '')
  })

  it('不支持 Boolean 对象', () => {
    assert.equal(typeOf(new Boolean(true)), '')
  })

  it('不支持 Number 对象', () => {
    assert.equal(typeOf(new Number(1)), '')
  })

  it('不支持 Date 对象', () => {
    assert.equal(typeOf(new Date()), '')
  })

  it('不支持 Error 对象', () => {
    assert.equal(typeOf(new Error()), '')
  })
})
