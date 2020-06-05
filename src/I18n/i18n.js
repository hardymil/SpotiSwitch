const FR = require('../I18n/languages/fr')
const EN = require('../I18n/languages/en')

export const translation = (language, key) => {
  if (language === 'en') {
    return EN[key] || `missing translation for key: ${key}`
  } if (language === 'fr') {
    return FR[key] || `missing translation for key: ${key}`
  } 
}
