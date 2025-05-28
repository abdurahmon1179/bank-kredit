import { createI18n } from 'vue-i18n'

const messages = {
  uz: {
    nav: {
      kreditMahsulotlar: "KREDIT MAHSULOTLAR",
      arizaYuborish: "ARIZA YUBORISH",
      arizaniTekshirish: "ARIZANI TEKSHIRISH",
      kirish: "KIRISH",
    },
    lang: {
      uzbek: "O'zbekcha",
      russian: "Ruscha",
    },
    header: {
      boshSahifa: "Bosh sahifa",
      banklar: "Banklar",
      murojaat: "Murojaat",
      arizaQoldirish: "Ariza qoldirish",
      moliyaviySavodhonlik: "Moliyaviy savodhonlik",
      yangiliklar: "Yangiliklar",
    },
    hero: {
      title: "BIZ BILAN TADBIRKORLIKNI",
      highlight: "RIVOJLANTIRING!"
    },
    currency: {
      title: "Valyuta kurslari"
    },
    stats: {
      mainRate: "Asosiy stavka",
      inflation: "Yillik inflyatsiya",
      target: "Inflyatsion target"
    },
    reserve: {
      title: "Majburiy zahira me‘yorlari",
      nationalCurrency: "Milliy valyuta",
      description: "O‘zbekiston bank tizimi tomonidan saqlanayotgan majburiy zahiralari",
      unit: "Trilliyon so‘m"
    },
    averageRates: {
      title: "O‘rtacha tortilgan foiz stavkalar (mart, 2025 yil)",
      currency: "Milliy valyutada",
      text1: "1 yilgacha bo‘lgan jami \n muddatli depozitlar bo‘yicha",
      text2: "1 yilgacha bo‘lgan jami \n muddatli depozitlar bo‘yicha",
      graphTitle: "O‘rtacha tortilgan foiz stavkalar"
    },
    service: {
      title: "Interaktiv",
      highlight: "xizmatlar",
      cards: {
        kredit: {
          title: "Kredit mahsulotlari",
          text: "Sizning ehtiyojlaringiz uchun mos kredit turlari. Iste’mol, ipoteka va biznes kreditlari. Qulay shartlar va tezkor rasmiylashtirish.",
        },
        savodxonlik: {
          title: "Moliyaviy savodxonlik",
          text: "Pulni to‘g‘ri boshqarishni o‘rganing. Budjet tuzish, tejash va investitsiya bo‘yicha maslahatlar. Moliyaviy mustaqillikka birinchi qadam.",
        },
        murojaat: {
          title: "Murojaat qoldirish",
          text: "Savolingiz, taklifingiz yoki muammoyingiz bormi? Biz har doim eshitishga tayyormiz. Online murojaat yuboring — tez javob oling.",
        },
        ariza: {
          title: "Ariza qoldirish",
          text: "Kredit olish uchun ariza topshirish juda oson. Kerakli ma’lumotlarni to‘ldiring va yuboring. Arizangiz tezda ko‘rib chiqiladi.",
        },
        button: "Batafsil"
      }
    },
    banks: {
      title: "O‘zbekistondagi",
      highlight: "tijorat banklari",
      agrobank: {
        name: "Agrobank",
        phoneLabel: "Telefon raqam:",
        callCenterLabel: "Aloqa markazi:",
        addressLabel: "Manzili:",
        address: "Kichik halqa yo‘li 67",
        emailLabel: "E-manzil:",
        email: "Elektronmanzil@gmail.com",
        button: "Bank Sahifasi"
      }
    }
  },

  ru: {
    nav: {
      kreditMahsulotlar: "КРЕДИТНЫЕ ПРОДУКТЫ",
      arizaYuborish: "ОТПРАВИТЬ ЗАЯВКУ",
      arizaniTekshirish: "ПРОВЕРИТЬ ЗАЯВКУ",
      kirish: "ВХОД",
    },
    lang: {
      uzbek: "Узбекский",
      russian: "Русский",
    },
    header: {
      boshSahifa: "Главная",
      banklar: "Банки",
      murojaat: "Обращение",
      arizaQoldirish: "Оставить заявку",
      moliyaviySavodhonlik: "Финансовая грамотност",
      yangiliklar: "Новости",
    },
    hero: {
      title: "СТАНЬТЕ УСПЕШНЫМ",
      highlight: "С НАМИ!"
    },
    currency: {
      title: "Курсы валют"
    },
    stats: {
      mainRate: "Основная ставка",
      inflation: "Годовая инфляция",
      target: "Целевой уровень"
    },
    reserve: {
      title: "Обязательные резервы",
      nationalCurrency: "Национальная валюта",
      description: "Обязательные резервы, хранимые банковской системой Узбекистана",
      unit: "Триллион сум"
    },
    averageRates: {
      title: "Средневзвешенные процентные ставки (март 2025)",
      currency: "В национальной валюте",
      text1: "По всем срочным депозитам до 1 года",
      text2: "По всем срочным депозитам до 1 года",
      graphTitle: "Средневзвешенные ставки"
    },
    service: {
      title: "Интерактивные",
      highlight: "услуги",
      cards: {
        kredit: {
          title: "Кредитные продукты",
          text: "Подходящие кредиты для ваших нужд: потребительские, ипотечные и бизнес-кредиты. Выгодные условия и быстрая регистрация.",
        },
        savodxonlik: {
          title: "Финансовая грамотность",
          text: "Научитесь управлять деньгами. Бюджет, сбережения и советы по инвестициям. Первый шаг к финансовой независимости.",
        },
        murojaat: {
          title: "Оставить обращение",
          text: "Есть вопрос, предложение или проблема? Мы всегда готовы выслушать. Отправьте онлайн-обращение — получите быстрый ответ.",
        },
        ariza: {
          title: "Оставить заявку",
          text: "Подать заявку на кредит очень просто. Заполните необходимые данные и отправьте. Заявка будет быстро рассмотрена.",
        },
        button: "Подробнее"
      }
    },
    banks: {
      title: "В Узбекистане",
      highlight: "коммерческие банки",
      agrobank: {
        name: "Агробанк",
        phoneLabel: "Телефон:",
        callCenterLabel: "Контактный центр:",
        addressLabel: "Адрес:",
        address: "Кичик халка йули 67",
        emailLabel: "E-mail:",
        email: "Elektronmanzil@gmail.com",
        button: "Страница банка"
      }
    }
  }
};

const i18n = createI18n({
  locale: 'uz',
  fallbackLocale: 'uz',
  messages,
})

export default i18n