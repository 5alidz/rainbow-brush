import { ctx } from '../utils/base.js'
import state from '../state.js'
import el from '../utils/el.js'
import hexToHsl from '../utils/hexToHsl.js'
import updateColorSwatch from '../utils/updateColorSwatch.js'

export const handleRainbowToggle = (e) => {
  const hsl = hexToHsl(state.current_hex())
  state._hue = hue.value = Math.floor(hsl.h)
  state._saturation = saturation.value = hsl.s
  state._lightness = lightness.value = hsl.l
  if(e.target.checked){
    state.rainbow = true
  }else{
    state.rainbow = false
  }
  updateColorSwatch()
}

