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
    "banks": {
    "title": "O‘zbekistondagi <span style='color: #00B241;'>tijorat banklari</span>",
    "allBanksButton": "Barcha Banklar",
    "agrobank": {
      "name": "Agrobank",
      "phoneLabel": "Telefon raqam:",
      "callCenterLabel": "Aloqa markazi:",
      "addressLabel": "Manzili:",
      "address": "Kichik halqa yo‘li 67",
      "emailLabel": "E-manzil:",
      "email": "Elektronmanzil@gmail.com",
      "button": "Bank Sahifasi"
    }
  },
    news: {
      Songgi: "So‘nggi",
      yangiliklar: "yangiliklar",
      BarchaYangiliklar: "Barcha Yangiliklar",
      title1: "Saudiya arabistonida muhim kelishuvga erishdi",
      text1: "Ma’lumki, joriy yilning 11-13-may kunlari Saudiya Arabistonining Jidda shahrida Islom taraqqiyot banki guruhi vakillarining 48-yillik yig‘ilishi bo‘lib o‘tdi.",
      title2: "\"O‘zmilliybank\" AJ va Xitoy Eksimbanki o‘rtasida 2 mlrd...",
      text2: "Ma’lumki, joriy yilning 11-13-may kunlari Saudiya Arabistonining Jidda shahrida Islom taraqqiyot banki guruhi vakillarining 48-yillik yig‘ilishi bo‘lib o‘tdi.",
      title3: "\"Asakabank\" AJ Xitoyning Zheshang banki bilan hamkor....",
      text3: "Ma’lumki, joriy yilning 11-13-may kunlari Saudiya Arabistonining Jidda shahrida Islom taraqqiyot banki guruhi vakillarining 48-yillik yig‘ilishi bo‘lib o‘tdi.",
      title4: "Yangi loyiha ishga tushirildi",
      text4: "O‘zbekiston hukumati yangi texnopark qurilishi haqida e’lon qildi.",
      title5: "Bank sohasida raqamli transformatsiya",
      text5: "Banklar mijozlar uchun yangi onlayn xizmatlarni ishga tushirmoqda.",
      BarchaYangiliklar: "Barcha Yangiliklar"
    },
    footer: {
      kontaktlar: "Kontaktlar",
      description: "Bank-kredit.uz - Tadbirkorlik subyektlari uchun tijorat banklari tomonidan taklif qilinayotgan kredit mahsulotlari, xizmatlarini o‘z ichiga olgan platforma.",
      emailLabel: "Elektron manzil",
      phoneLabel: "Telefon raqam",
      addressLabel: "Manzil",
      address: "Kichik Halqa Yo‘li 38/1, 100084, Toshkent, Toshkent, O‘zbekiston",
      copyright: "Caroselling mualliflik huquqi 2025"
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
      moliyaviySavodhonlik: "Финансовая грамотность",
      yangiliklar: "Новости",
    },
    hero: {
      title: "РАЗВИВАЙТЕ БИЗНЕС",
      highlight: "ВМЕСТЕ С НАМИ!"
    },
    currency: {
      title: "Курсы валют"
    },
    stats: {
      mainRate: "Основная ставка",
      inflation: "Годовая инфляция",
      target: "Инфляционный таргет"
    },
    reserve: {
      title: "Нормы обязательных резервов",
      nationalCurrency: "Национальная валюта",
      description: "Обязательные резервы, хранящиеся в банковской системе Узбекистана",
      unit: "Триллион сум"
    },
    averageRates: {
      title: "Средневзвешенные процентные ставки (март 2025 г.)",
      currency: "В национальной валюте",
      text1: "По всем срочным \n депозитам до 1 года",
      text2: "По всем срочным \n депозитам до 1 года",
      graphTitle: "Средневзвешенные ставки"
    },
    service: {
      title: "Интерактивные",
      highlight: "услуги",
      cards: {
        kredit: {
          title: "Кредитные продукты",
          text: "Подходящие типы кредитов для ваших нужд. Потребительские, ипотечные и бизнес-кредиты. Выгодные условия и быстрая обработка."
        },
        savodxonlik: {
          title: "Финансовая грамотность",
          text: "Научитесь правильно управлять деньгами. Составление бюджета, сбережения и инвестиционные советы. Первый шаг к финансовой независимости."
        },
        murojaat: {
          title: "Оставить обращение",
          text: "Есть вопрос, предложение или проблема? Мы всегда готовы вас выслушать. Отправьте онлайн-обращение — получите быстрый ответ."
        },
        ariza: {
          title: "Оставить заявку",
          text: "Подать заявку на кредит очень просто. Заполните необходимые данные и отправьте. Ваша заявка будет быстро рассмотрена."
        },
        button: "Подробнее"
      }
    },
   "banks": {
    "title": "Коммерческие <span style='color: #00B241;'>банки Узбекистана</span>",
    "allBanksButton": "Все банки",
    "agrobank": {
      "phoneLabel": "Телефон:",
      "callCenterLabel": "Контактный центр:",
      "addressLabel": "Адрес:",
      "address": "Кичик халка йули 67",
      "emailLabel": "E-mail:",
      "email": "Elektronmanzil@gmail.com",
      "button": "Страница банка"
    }
  },
    news: {
      Songgi: "Последние",
      yangiliklar: "новости",
      BarchaYangiliklar: "Все новости",
      title1: "Саудовская Аравия достигла важного соглашения",
      text1: "11–13 мая в Джидде прошло 48-е собрание Группы Исламского банка развития.",
      title2: "АО «Узнацбанк» и Эксимбанк Китая подписали соглашение на 2 млрд...",
      text2: "11–13 мая в Джидде прошло 48-е собрание Группы Исламского банка развития.",
      title3: "АО «Асакабанк» начал сотрудничество с банком Чжэшан из Китая...",
      text3: "11–13 мая в Джидде прошло 48-е собрание Группы Исламского банка развития.",
      title4: "Запущен новый проект",
      text4: "Правительство Узбекистана объявило о строительстве нового технопарка.",
      title5: "Цифровая трансформация в банковской сфере",
      text5: "Банки запускают новые онлайн-сервисы для клиентов.",
    },
    footer: {
      kontaktlar: "Контакты",
      description: "Bank-kredit.uz — платформа, включающая кредитные продукты и услуги, предлагаемые коммерческими банками для субъектов предпринимательства.",
      emailLabel: "Электронная почта",
      phoneLabel: "Телефон",
      addressLabel: "Адрес",
      address: "Кичик Халка Йули 38/1, 100084, Ташкент, Узбекистан",
      copyright: "Авторские права Caroselling 2025"
    }
  }
  
};

const i18n = createI18n({
  locale: 'uz',
  fallbackLocale: 'uz',
  messages,
})

export default i18n