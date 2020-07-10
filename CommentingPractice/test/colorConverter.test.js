const describe = require("mocha").describe
const it = require('mocha').it

const assert = require('chai').assert;
const expect = require('chai').expect;
const ColorConverter = require('../services/colorConverter')

describe('Color Converter unit tests', () => {
  describe('pack-1', () => {
    const cc = new ColorConverter("pack-1")
    it('White rgb should be #FFFFFF', () => {
      const hex = '#FFFFFF'
      assert.equal(cc.rgbToHex(255, 255, 255), hex)
    })
    it('rgb to hex; hex to rgb', () => {
      assert.deepEqual(cc.hexToRGB(cc.rgbToHex(234, 3, 43)), {r: 234, g: 3, b: 43})
    })
    it('255>', () => {
      assert.equal(cc.hexToRGB(cc.rgbToHex(43, 256, 43)), null)
    })
    it('0<', () => {
      assert.equal(cc.hexToRGB(cc.rgbToHex(43, 34, -1)), null)
    })
    it('hex to rgb; rgb to hex', () => {
      const {r, g, b} = cc.hexToRGB('#A454aF')
      assert.equal(cc.rgbToHex(r, g, b), "#A454aF".toUpperCase())
    })
  })
})


