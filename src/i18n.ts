import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: ['ru', 'en'],
    ns: ['header', 'leftGrid', 'home', 'error'],
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  })

const setFontByLanguage = (lng: string) => {
  const font = lng === 'en' ? 'var(--en-font)' : 'var(--ru-font)'
  document.documentElement.style.setProperty('--font-family', font)
}

setFontByLanguage(i18n.language)

i18n.on('languageChanged', (lng) => {
  setFontByLanguage(lng)
})

export default i18n
