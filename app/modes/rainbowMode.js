import gui from '../gui/guiElements.js'
import state from '../state.js'
import updateColorSwatch from '../utils/updateColorSwatch.js'

import { ctx } from '../utils/base.js'

export const rainbowMode = () => {
  state._saturation = 100
  state._lightness = 50
  if(state._hue >= 360){
    state._hue = 0
  }

  ctx.strokeStyle = `hsl(${state._hue}, ${state._saturation}%, ${state._lightness}%)`
  const { _hue, _saturation, _lightness } = state
  gui.hue.value = _hue
  gui.saturation.value = _saturation
  gui.lightness.value = _lightness
  updateColorSwatch()
  state._hue += 1
}

