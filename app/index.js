/* TODO
 * for this to be done:
 * * better wiring for easy feature adding. [DONE...]
 * * need to see the brush.
 * * add history.
 * * add ereaser.
 * * add color picker.
 * * add saving ability.
 * * add fill bucket.
 */
import gui_init from './gui/gui.js'
import canvas_init from './gui/canvas.js'
import prepare from './utils/prepare.js'

prepare.canvas()
prepare.context()

gui_init()
canvas_init()
console.log('it works')
