import { createI18n } from 'vue-i18n'
import uz from './uz.json'
import ru from './ru.json'
import en from './en.json' // 🟢 Ingliz tilini shu yerga import qilishni unutmang!

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('selectedLang') || 'uz',
  fallbackLocale: 'uz',
  messages: {
    uz,
    ru,
    en // 🟢 endi bu yerda ishlashi mumkin
  }
})

export default i18n
