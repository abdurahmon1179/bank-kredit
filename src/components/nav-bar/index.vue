<template>
    <header>
      <Container>
        <nav>
          <div class="nav-logo">
            <a href="#">
              <img src="../../../public/images/logo.svg" alt="">
            </a>
          </div>
          <div class="nav-menu-wrapper">
            <div class="nav-menu">
              <div class="nav-menu-card">
                <img src="../../../public/images/home.svg" alt="">
                <p>{{ $t('nav.kreditMahsulotlar') }}</p>
              </div>
              <div class="nav-menu-card">
                <img src="../../../public/images/message.svg" alt="">
                <p>{{ $t('nav.arizaYuborish') }}</p>
              </div>
              <div class="nav-menu-card">
                <img src="../../../public/images/checkmessage.svg" alt="">
                <p>{{ $t('nav.arizaniTekshirish') }}</p>
              </div>
            </div>
            <div class="nav-actions">
              <div class="nav-select">
                <img class="js-img" :src="flagSrc" alt="flag" />
                <select v-model="locale">
                  <option value="uz">{{ $t('lang.uzbek') }}</option>
                  <option value="ru">{{ $t('lang.russian') }}</option>
                </select>
              </div>
              <button>
                <p>{{ $t('nav.kirish') }}</p>
                <img src="../../../public/images/account.svg" alt="">
              </button>
            </div>
          </div>
        </nav>
      </Container>
      <hr>
      <ul class="header-menu">
        <li>{{ $t('header.boshSahifa') }}</li>
        <li>{{ $t('header.banklar') }}</li>
        <li>{{ $t('header.murojaat') }}</li>
        <li>{{ $t('header.arizaQoldirish') }}</li>
        <li>{{ $t('header.moliyaviySavodhonlik') }}</li>
        <li>{{ $t('header.yangiliklar') }}</li>
      </ul>
    </header>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import Container from "../layouts/index.vue"
  import { useI18n } from 'vue-i18n'
  
  const { locale } = useI18n()
  
  const flagSrc = ref("../../../public/images/uz.svg")
  
  watch(locale, (newLocale) => {
    if (newLocale === "uz") {
      flagSrc.value = "../../../public/images/uz.svg"
    } else if (newLocale === "ru") {
      flagSrc.value = "../../../public/images/ru.png"
    }
  })
  </script>
  
  


<style scoped>
header{
    background-color: white;
}
nav {
    display: flex;
    align-items: center;
    gap: 80px;
    height: 64px;
}

.nav-menu-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.nav-menu {
    display: flex;
    gap: 12px;
}

.nav-menu-card {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #F9F9F9;
    padding: 12px 8px;
    font-size: 13px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #F0F0F0;
}

.nav-actions {
    display: flex;
    gap: 48px;
}

.nav-select {
    display: flex;
    align-items: center;
    gap: 8px;
}

.nav-select>select {
    border: none;
    outline: none;
}

.nav-actions>button {
    width: 93px;
    height: 36px;
    background-color: #00B241;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    border-radius: 12px;
    cursor: pointer;
}

.nav-select>img {
    width: 20px;
    height: 13px;
}

.header-menu {
    display: flex;
    list-style: none;
    gap: 48px;
    font-size: 16px;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 1370px;
}

.header-menu > li {
    position: relative;
    display: inline-block;
    cursor: pointer;
    color:#626262;
}

.header-menu > li::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: black;
    transition: width 0.3s ease;
}
.header-menu > li:hover {
    color: black;
}

.header-menu > li:hover::after {
    width: 100%;
}

.active{
    text-decoration: underline;
}

hr{
    border: none;
    height: 1px;
    background-color: #F0F0F0;
}
</style>