import { canvas, ctx } from '../utils/base.js'
import draw from '../handlers/draw.js'
import state from '../state.js'
import { handleMouseDown } from '../handlers/mouse.js'

const canvas_init = () => {
  canvas.addEventListener('mousedown', handleMouseDown)
  canvas.addEventListener('mousemove', draw)
  canvas.addEventListener('mouseup', () => state.isDrawing = false)
  canvas.addEventListener('mouseout', () => state.isDrawing = false)
}

export default canvas_init

