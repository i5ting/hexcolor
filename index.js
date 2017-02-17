'use strict'

function getColor(number) {
    let color = number
    const blue = parseInt(color % 0x100, 10)
    color = color >>> 8
    const green = parseInt(color % 0x100, 10)
    color = color >>> 8
    const red = parseInt(color % 0x100, 10)
    const alpha = (parseInt(color >>> 8, 10) / 0xFF).toFixed(1)
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

function trim (str) {
  return str.replace(/^\s+|\s+$/gm,'')
}

function rgbaToHex (rgba) {
    var parts = rgba.substring(rgba.indexOf("(")).split(","),
        r = parseInt(trim(parts[0].substring(1)), 10),
        g = parseInt(trim(parts[1]), 10),
        b = parseInt(trim(parts[2]), 10),
        a = parseFloat(trim(parts[3].substring(0, parts[3].length - 1))).toFixed(2)

    return ('#' + r.toString(16) + g.toString(16) + b.toString(16) + (a * 255).toString(16).substring(0,2))
}

module.exports = function(number) {
    var color = getColor(number)
    var hexColor = rgbaToHex(color)

    return hexColor
}
