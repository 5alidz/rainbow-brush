import hslToHex from './utils/hslToHex.js'

function State () {
  this.isDrawing = false
  this.isRainbow = true

  this.brushSize = 10
  this.lastX = 0
  this.lastY = 0

  this._hue = 0
  this._saturation = 100
  this._lightness = 50

  this.current_hex = function() {
    return hslToHex(this._hue, this._saturation, this._lightness)
  }
  this.log = function(){
    console.log(this)
  }
}

const state = new State()

export default state
