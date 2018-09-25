import state from '../state.js'

import { handleLastXY } from './mouse.js'
import { brushStroke } from './brush.js'

import { rainbowMode } from '../modes/rainbowMode.js'
import { normalMode } from '../modes/normalMode.js'


export default function draw(e){
  if(!state.isDrawing) return
  if(state.isRainbow) {
    rainbowMode()
  } else {
    normalMode()
  }
  brushStroke(e)
  handleLastXY(e)
}
