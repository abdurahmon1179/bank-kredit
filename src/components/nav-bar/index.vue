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
              <img src="../../../public/images/selectuz.svg" alt="Til">
              <span>Uz</span>
              <img class="select-strelka arrow-icon" src="../../../public/images/lang-arrow.svg" alt="">

              <ul class="dropdown-menu">
                <li><img src="../../../public/images/uk.svg" alt=""> En</li>
                <li><img src="../../../public/images/russia.svg" alt=""> Ru</li>
              </ul>
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


    <Container>
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
    </Container>

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
  span{
    margin-left: 8px;
    margin-right: 8px;
  }
}




.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, 
              rgba(17, 17, 26, 0.1) 0px 16px 56px, 
              rgba(17, 17, 26, 0.1) 0px 24px 80px;
  z-index: 100;
  width: 100%;
  border-radius: 8px !important;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transform: scaleY(0);
  transform-origin: top;
  transition: all 0.3s ease;
}


.nav-lang__selector:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: scaleY(1);
}


.dropdown-menu li {
  list-style: none;
  padding: 10px;
  cursor: pointer;
  background-color: #fff !important;
  color: #000;
  display: flex;
  align-items: center;
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

  .site-header__inner {
    gap: 0;
    justify-content: space-between !important;
  }

  .site-header__nav {
    width: 80%;
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
}
</style>



<script setup>
import Container from "../layouts/index.vue"
</script>