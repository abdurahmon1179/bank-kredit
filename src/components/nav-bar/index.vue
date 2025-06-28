<template>
  <header class="site-header">
    <Container>
      <div class="site-header__inner">
        <div class="logo">
          <a href="#">
            <img src="../../../public/images/logo.svg" alt="">
          </a>
        </div>

        <div class="site-header__nav">
          <div class="nav-menu">
            <div class="nav-menu__item nav-card">
              <img class="nav-card__img" src="../../../public/images/navhome.svg" alt="">
              <p class="nav-card__p">{{ $t('nav.kreditMahsulotlar') }}</p>
            </div>
            <div class="nav-menu__item nav-card">
              <img class="nav-card__img" src="../../../public/images/navsms.svg" alt="">
              <p class="nav-card__p">{{ $t('nav.arizaYuborish') }}</p>
            </div>
            <div class="nav-menu__item nav-card">
              <img class="nav-card__img" src="../../../public/images/navsearch.svg" alt="">
              <p class="nav-card__p">{{ $t('nav.arizaniTekshirish') }}</p>
            </div>
          </div>

          <div class="nav-controls">
            <div class="nav-lang__selector">
              <img class="new-flag" :src="selectedLang.img" alt="Til">
              <span>{{ $t(`lang.${selectedLang.code === 'uz' ? 'uzbek' : selectedLang.code === 'ru' ? 'russian' : selectedLang.code}`) }}</span>
              <img class="select-strelka arrow-icon" src="/images/lang-arrow.svg" alt="">

              <ul class="dropdown-menu">
                <li v-for="lang in languages" :key="lang.code" @click="selectLanguage(lang)">
                  <img :src="lang.img" alt="flag">
                  {{ $t(`lang.${lang.code === 'uz' ? 'uzbek' : lang.code === 'ru' ? 'russian' : lang.code}`) }}
                </li>
              </ul>
            </div>

            <div class="nav-auth">
              <button class="nav-auth__btn">
                <p>{{ $t('nav.kirish') }}</p>
                <img src="../../../public/images/authperson.svg" alt="">
              </button>
            </div>
          </div>

          <div class="burger-menu" :class="{ open: isBurgerOpen }" @click="toggleBurger">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="mobile-menu" :class="{ open: isBurgerOpen }">
            <ul>
              <li>{{ $t('header.boshSahifa') }}</li>
              <li>{{ $t('header.banklar') }}</li>
              <li>{{ $t('header.murojaat') }}</li>
              <li>{{ $t('header.arizaQoldirish') }}</li>
              <li>{{ $t('header.moliyaviySavodhonlik') }}</li>
              <li>{{ $t('header.yangiliklar') }}</li>
            </ul>
          </div>

        </div>
      </div>
    </Container>

    <span class="header-hr"></span>

    <Container>
      <div class="header-menu">
        <ul class="header-menu__list">
          <li class="list-item active">{{ $t('header.boshSahifa') }}</li>
          <li class="list-item">{{ $t('header.banklar') }}</li>
          <li class="list-item">{{ $t('header.murojaat') }}</li>
          <li class="list-item">{{ $t('header.arizaQoldirish') }}</li>
          <li class="list-item">{{ $t('header.moliyaviySavodhonlik') }}</li>
          <li class="list-item">{{ $t('header.yangiliklar') }}</li>
        </ul>
      </div>
    </Container>

    <span class="header-hr second-class"></span>
  </header>
</template>

<script setup>
import Container from "../layouts/index.vue"
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const allLanguages = [
  { code: 'uz', name: 'Uz', img: '/images/selectuz.svg' },
  { code: 'en', name: 'En', img: '/images/uk.svg' },
  { code: 'ru', name: 'Ru', img: '/images/russia.svg' }
]

const savedLangCode = localStorage.getItem('selectedLang') || 'uz'
const selectedLang = ref(allLanguages.find(lang => lang.code === savedLangCode) || allLanguages[0])
locale.value = selectedLang.value.code

const languages = computed(() => allLanguages.filter(lang => lang.code !== selectedLang.value.code))
function selectLanguage(lang) {
  selectedLang.value = lang
  locale.value = lang.code
  localStorage.setItem('selectedLang', lang.code)
}

const isBurgerOpen = ref(false);
const toggleBurger = () => {
  isBurgerOpen.value = !isBurgerOpen.value;
};
</script>


<style lang="scss" scoped>
.burger-menu{
  display: none !important;
}
.mobile-menu{
  display: none;
}
.site-header {
  background-color: white;

  &__inner {
    display: flex;
    align-items: center;
    gap: 80px;
    height: 64px;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .nav-menu {
      display: flex;
      gap: 12px;

      &__item {
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: #F9F9F9;
        padding: 8px 12px;
        border: 1px solid #F0F0F0;
        border-radius: 10px;
        cursor: pointer;

        .nav-card__p {
          font-size: 13px;
          font-weight: 600;
          font-family: inter;
          text-transform: uppercase;
        }

        img {
          width: 18px;
          height: 18px;
        }
      }
    }

    .nav-controls {
      display: flex;
      gap: 48px;

      .nav-lang__selector {
        position: relative;
        display: inline-flex;
        align-items: center;
        background-color: #fff;
        border-radius: 8px;
        padding: 8px 12px;
        cursor: pointer;
        user-select: none;
        transition: 0.3s ease;

        span {
          margin-left: 8px;
          margin-right: 8px;
        }
      }


      .new-flag {
        width: 20px;
        height: 15px;
      }

      .nav-lang__selector {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .nav-lang__selector .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        list-style: none;
        padding: 8px 12px;
        border: 1px solid #ccc;
        z-index: 100;
      }

      .nav-lang__selector:hover .dropdown-menu {
        display: block;
        border-radius: 8px;
        border: none;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
      }

      .dropdown-menu li {
        padding: 6px 10px;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }


      .dropdown-menu li img {
        width: 20px;
        height: 15px;
        margin-right: 5px;
      }

      .arrow-icon {
        width: 15px;
        height: 15px;
        transition: transform 0.3s ease;
        display: inline-block;
      }


      .nav-lang__selector:hover .arrow-icon {
        transform: rotate(180deg);
      }


      .dropdown-menu li:hover {
        background-color: #f1f1f1;
        opacity: 0.5;
      }


      .nav-auth {
        &__btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background-color: #00B241;
          border: none;
          border-radius: 12px;
          text-transform: uppercase;
          color: white;
          font-size: 13px;
          font-weight: 600;
          font-family: inter;
          cursor: pointer;
        }
      }
    }
  }

  .header-hr {
    border: none;
    background-color: #F0F0F0;
    height: 1px;
    width: 100%;
    margin: 0;
    display: block;
  }

  .header-menu {
    width: 1010px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;

    .header-menu__list {
      padding-left: 200px;
      display: flex;
      align-items: center;
      gap: 48px;
      list-style: none;
      color: #626262;
      font-family: inter;
      font-size: 16px;
      font-weight: 500;

      .list-item {
        position: relative;
        cursor: pointer;
        transition: color 0.3s ease;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0px;
          height: 1.5px;
          width: 0;
          background-color: black;
          transition: width 0.3s ease;
        }

        &:hover {
          color: #000;

          &::after {
            width: 100%;
          }
        }
      }
    }

  }
}

.burger-menu {
  display: none;
}


@media (max-width:1420px) {
  .container {
    width: 100%;
    max-width: 1070px;
    padding: 0 15px;
  }
  .burger-menu{
    display: flex !important;
  }
  .burger-menu {
  width: 30px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1001;
}

.burger-menu span {
  height: 3px;
  background-color: #000;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.burger-menu.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger-menu.open span:nth-child(2) {
  opacity: 0;
}
.burger-menu.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobil menyu */
.mobile-menu {
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 260px;
  background-color: #fff;
  box-shadow: -2px 0 10px rgba(0,0,0,0.1);
  padding: 20px;
  z-index: 1000;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.mobile-menu.open {
  transform: translateX(0%);
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
}

.mobile-menu ul li {
  margin: 20px 0;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
}

  .nav-menu__item>p {
    font-size: 13px;
  }

  .logo {
    width: 102px;
    height: 22px;
  }

  .nav-controls {
    display: none !important;
  }

  .burger-menu {
    display: flex;
    cursor: pointer;
  }

  .header-menu {
    display: none !important;
  }

  .second-class {
    display: none !important;
  }

  .site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 1002;
  padding-left: 40px;
  padding-right: 40px;
}



  .site-header__nav {
    width: 82%;
  }

}
@media(max-width:920px){
  .site-header{
    margin-left: -30px;
  }
  .nav-menu{
    display: none !important;
  }
  .site-header__nav{
    justify-content: end !important;
  }
}
@media(max-width:850px) {
  .nav-menu__item {
    p {
      font-size: 11px !important;
    }
  }
}

@media(max-width:745px) {
  .nav-menu__item {
    padding: 10px 6px;

    p {
      font-size: 10px !important;
    }
  }
}



@media(max-width:705px) {
  .nav-menu__item {
    padding: 6px 8px !important;

    p {
      font-size: 9px !important;
    }
  }

  .site-header__nav {
    width: 78%;
  }
}


@media(max-width:655px) {
  .nav-menu__item {
    display: none !important;
  }
  .site-header__nav{
    min-width: 60% !important;
  }
}

@media(max-width:460px){
  .burger-menu{
    margin-right: 20px;
  }
}


.burger-menu {
  width: 30px;
  height: 22px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.burger-menu span {
  height: 3px;
  background-color: #000;
  border-radius: 2px;
  transition: 0.3s ease;
}

/* Open holatdagi animatsiya */
.burger-menu.open span:nth-child(1) {
  transform: rotate(45deg) translate(10px, 15px);
}

.burger-menu.open span:nth-child(2) {
  opacity: 0;
}

.burger-menu.open span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -5px);
}


.burger-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  z-index: 1001;
}
.burger-menu span {
  width: 25px;
  height: 3px;
  background: #000;
  transition: 0.4s;
  display: block;
}
.burger-menu.open span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}
.burger-menu.open span:nth-child(2) {
  opacity: 0;
}
.burger-menu.open span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -7px);
}

.mobile-menu {
  position: fixed;
  top: 64px; 
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  
}
.mobile-menu.open {
  transform: translateX(0);
}
.mobile-menu ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}
.mobile-menu li {
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}
</style>
