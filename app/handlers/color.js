import updateColorSwatch from '../utils/updateColorSwatch.js'
import state from '../state.js'

export const handleHue = (e) => {
  state._hue = e.target.value
  updateColorSwatch()
}
export const handleSat = (e) => {
  state._saturation = e.target.value
  updateColorSwatch()
}
export const handleLight = (e) => {
  state._lightness = e.target.value
  updateColorSwatch()
}

