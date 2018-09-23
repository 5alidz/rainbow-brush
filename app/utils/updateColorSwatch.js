import state from '../state.js'
import el from '../utils/el.js'

const updateColorSwatch = () => {
  const { _hue, _saturation, _lightness } = state
  const colorSwatch = el('color-id')
    colorSwatch
    .innerHTML = state.current_hex()
  colorSwatch
    .style
    .backgroundColor = `hsl(${state._hue}, ${state._saturation}%, ${state._lightness}%)`
  if(_lightness < 50){
    colorSwatch.style.color = 'white'
  }else{
    colorSwatch.style.color = 'black'
  }
}

export default updateColorSwatch
