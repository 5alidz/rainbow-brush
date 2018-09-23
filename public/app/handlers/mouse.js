import state from '../state.js'

export const handleLastXY = (e) => {
  state.lastX = e.offsetX
  state.lastY = e.offsetY
}
export const handleMouseDown = (e) => {
  state.isDrawing = true
  state.lastX = e.offsetX
  state.lastY = e.offsetY
}

