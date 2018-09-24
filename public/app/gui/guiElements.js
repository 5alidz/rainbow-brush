import el from '../utils/el.js'

/* getting elemenets by id*/

const gui = {
  rainbow: el('rainbow-mode'),
  settingToggle: el('setting-checkbox'),
  sizeSlider: el('brush-size'),
  hue: el('hue'),
  saturation: el('saturation'),
  lightness: el('lightness'),
  clearCanvas: el('clear-canvas'),
  colorSwatch: el('color-id'),
}

export default gui
