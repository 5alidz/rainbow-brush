import { canvas, ctx } from './base.js'
import state from '../state.js'

const prepare = {
  canvas: () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  },
  context: () => {
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineWidth = state.brushSize
  }
}
export default prepare
