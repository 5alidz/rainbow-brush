import state from '../state.js'

import gui from './guiElements.js'

import { handleRainbowToggle } from '../handlers/rainbow.js'
import { handleHue, handleSat, handleLight } from '../handlers/color.js'
import { handleBrushSize } from '../handlers/brush.js'
import { handleSettingsMenu } from '../handlers/settingsMenu.js'
import { clearCanvas } from '../handlers/canvas.js'

gui
  .settingToggle
  .checked = false
gui
  .rainbow
  .checked = true
gui
  .sizeSlider
  .value = state.brushSize
gui
  .colorSwatch
  .style
  .backgroundColor = 'hsl(0, 100%, 50%)'
gui
  .colorSwatch
  .innerHTML = '#ff0000'

gui.hue.value = state._hue
gui.saturation.value = state._saturation
gui.lightness.value = state._lightness

const gui_init = () => {
  gui
    .sizeSlider
    .addEventListener('change', handleBrushSize)
  gui.
    settingToggle
    .addEventListener('change', handleSettingsMenu)
  gui
    .rainbow
    .addEventListener('change', handleRainbowToggle)
  gui
    .hue
    .addEventListener('change', handleHue)
  gui
    .saturation
    .addEventListener('change', handleSat)
  gui
    .lightness
    .addEventListener('change', handleLight)
  gui
    .clearCanvas
    .onclick = clearCanvas
}

export default gui_init
