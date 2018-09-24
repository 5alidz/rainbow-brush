import el from '../utils/el.js'

export const handleSettingsMenu = (e) => {
  const settings = el('settings')
  settings.hidden = e.target.checked
}

