import el from '../utils/el.js'

export const handleSettingsMenu = (e) => {
  const settings = el('settings')
  e.target.checked ?
    settings.hidden = true
    : settings.hidden = false
}

