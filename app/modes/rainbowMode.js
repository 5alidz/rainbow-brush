import { ctx } from '../utils/base.js'
import state from '../state.js'
import updateColorSwatch from '../utils/updateColorSwatch.js'

export const rainbowMode = () => {
  state._saturation = 100
  state._lightness = 50
  ctx.strokeStyle = `hsl(${state._hue}, ${state._saturation}%, ${state._lightness}%)`

  if(state._hue >= 360){
    state._hue = 0
  }
  const { _hue, _saturation, _lightness } = state
  hue.value = _hue
  saturation.value = _saturation
  lightness.value = _lightness
  updateColorSwatch()
  state._hue += 1
}

