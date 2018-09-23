import { canvas, ctx } from '../utils/base.js'
export const clearCanvas = () => ctx
  .clearRect(0, 0, canvas.width, canvas.height)
