import { ctx } from '../utils/base.js'
import state from '../state.js'

export const handleBrushSize = (e) => {
  state.brushSize = e.target.value
  ctx.lineWidth = state.brushSize
}

export const brushStroke = (e) => {
  ctx.beginPath()
  ctx.moveTo(state.lastX, state.lastY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
}

