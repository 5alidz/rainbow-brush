import gui_init from './gui/gui.js'
import canvas_init from './gui/canvas.js'
import prepare from './utils/prepare.js'

prepare.canvas()
prepare.context()

gui_init()
canvas_init()
