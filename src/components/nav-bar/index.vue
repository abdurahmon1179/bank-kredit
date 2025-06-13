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
              <p class="nav-card__p">Kredit maxsulotlar</p>
            </div>
            <div class="nav-menu__item nav-card">
              <img class="nav-card__img" src="../../../public/images/navsms.svg" alt="">
              <p class="nav-card__p">Ariza yuborish</p>
            </div>
            <div class="nav-menu__item nav-card">
              <img class="nav-card__img" src="../../../public/images/navsearch.svg" alt="">
              <p class="nav-card__p">Kredit maxsulotlar</p>
            </div>
          </div>

          <div class="nav-controls">
            <div class="nav-lang__selector">
              <img src="../../../public/images/selectuz.svg" alt="">
              <select class="nav-lang__select">
                <option value="">Uz</option>
                <option value="">Ru</option>
              </select>
            </div>

            <div class="nav-auth">
              <button class="nav-auth__btn">
                <p>Kirish</p>
                <img src="../../../public/images/authperson.svg" alt="">
              </button>
            </div>
          </div>
          <div class="burger-menu">
            <img src="../../../public/images/burger.svg" alt="">
          </div>
        </div>
      </div>
    </Container>
    <span class="header-hr"></span>


    <div class="container">
      <div class="header-menu">
        <ul class="header-menu__list">
          <li class="list-item active">Bosh sahifa</li>
          <li class="list-item">Banklar</li>
          <li class="list-item">Murojaat</li>
          <li class="list-item">Ariza qoldirish</li>
          <li class="list-item">Moliyaviy savodhonlik</li>
          <li class="list-item">Yangiliklar</li>
        </ul>
      </div>
    </div>

    <span class="header-hr second-class"></span>
  </header>
  </template>
  

  

<style lang="scss" scoped>
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
                img{
                  width: 18px;
                  height: 18px;
                }
            }
        }

        .nav-controls {
            display: flex;
            gap: 48px;

            .nav-lang__selector {
                display: flex;
                align-items: center;
                gap: 8px;

                .nav-lang__select {
                    border: none;
                    outline: none;
                    font-family: inter;
                    font-size: 16px;
                    font-weight: 400;
                }
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
        width: 1130px;
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
.burger-menu{
  display: none;
}


@media (max-width:1420px) {
    .container {
        width: 100%;
        max-width: 1070px;
        padding: 0 15px;
    }
    .nav-menu__item > p{
      font-size: 13px;
    }
    .logo{
      width: 102px;
      height: 22px;
    }
    .nav-controls{
      display: none !important;
    }
    .burger-menu{
      display: flex;
      cursor: pointer;
    }
    .header-menu{
      display: none !important;
    }
    .second-class{
      display: none !important;
    }
    .site-header__inner{
      gap: 0;
      justify-content: space-between !important;
    }
    .site-header__nav{
      width: 80%;
    }
    
}

@media(max-width:850px){
  .nav-menu__item{  
    p{
      font-size: 11px !important;
    }
  }
}

@media(max-width:745px){
  .nav-menu__item{
    padding: 10px 6px;
    p{
      font-size: 10px !important;
    }
  }
}



@media(max-width:705px){
  .nav-menu__item{
    padding: 6px 8px !important;
    p{
      font-size: 9px !important;
    }
  }
  .site-header__nav{
      width: 78%;
    }
}


@media(max-width:655px){
  .nav-menu__item{
    display: none !important;
  }
}


</style>



<script setup>
import Container from "../layouts/index.vue"
</script>