import { ctx } from '../utils/base.js'
import state from '../state.js'
import updateColorSwatch from '../utils/updateColorSwatch.js'

export const normalMode = () => {
  ctx.strokeStyle = `hsl(${state._hue}, ${state._saturation}%, ${state._lightness}%)`

  updateColorSwatch()
}

