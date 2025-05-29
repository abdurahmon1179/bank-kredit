// src/i18n/index.js

import { createI18n } from 'vue-i18n'
import uz from './uz.json'
import ru from './ru.json'

const messages = {
  uz,
  ru,
}

const i18n = createI18n({
  legacy: false, 
  locale: 'uz',
  fallbackLocale: 'ru',
  messages,
})

export default i18n
