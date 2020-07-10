/**
 * @file Color Converter
 * @author Shayan Amirhosseini (Front-end)
 */

/**
 * @module converting hex color to rgb and rgb to hex
 */
export default class ColorConverter {
  /**
   *
   * @param name{string} name - Name
   */
  constructor(name = "unnamed") {
    this.name = name
  }

  /**
   *
   * @param r {number}
   * @param g {number}
   * @param b {number}
   * @returns {string} | null in case of wrong format
   */
  rgbToHex(r, g, b) {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255)
      return null
    const r_s = (r.toString(16).length === 1)
      ? `0${r.toString(16)}` : r.toString(16)
    const g_s = (g.toString(16).length === 1)
      ? `0${g.toString(16)}` : g.toString(16)
    const b_s = (b.toString(16).length === 1)
      ? `0${b.toString(16)}` : b.toString(16)
    return `#${r_s}${g_s}${b_s}`.toUpperCase()
  }

  /**
   *
   * @param hex {string}
   * @returns {string} | null in case of wrong format
   */
  hexToRGB(hex) {
    let res = null
    if (typeof hex === 'string')
      res = hex.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)
    return res ? {
      r: parseInt(res[1], 16),
      g: parseInt(res[2], 16),
      b: parseInt(res[3], 16)
    } : res
  }
}



