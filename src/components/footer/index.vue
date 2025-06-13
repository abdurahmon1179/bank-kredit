<template>
  <footer class="section-footer">
    <Container>
      <div class="section-footer__top">
        <div class="footer-menu">
          <div class="wrapper-res">
            <h2>Kontaktlar</h2>
          <div class="footer-social-media">
            <img src="../../../public/images/instagram.svg" alt="">
            <img src="../../../public/images/youtube.svg" alt="">
            <img src="../../../public/images/telegram.svg" alt="">
          </div>
          </div>
          <p>Bank-kredit.uz - Тадбиркорлик субъектлари учун тижорат банклари <br> томонидан таклиф қилинаётган кредит маҳсулотлари, <br>хизматларини ўз ичига олган платформа.</p>
        </div>
        <div class="section-footer__info">
          <div class="footer-contact-wrapper">
            <div class="footer-email">
              <div class="email-title">
                <img src="../../../public/images/footeremail.svg" alt="">
                <p>Elektron manzil</p>
              </div>
              <h3>info@bank-kredit.uz</h3>
            </div>

            <div class="footer-email">
              <div class="email-title">
                <img src="../../../public/images/callfooter.svg" alt="">
                <p>Telefon raqam</p>
              </div>
              <h3>+998 71 200 00 44</h3>
            </div>
          </div>
          <div class="footer-adres">
            <div class="adres-title">
              <img src="../../../public/images/footerloc.svg" alt="">
              <p>Manzil</p>
            </div>
            <h3 class="adres-desc">Кичик Халқа Йўли 38/1, 100084, Тошкент, Тошкент, Ўзбекистон</h3>
          </div>
        </div>
      </div>
      <div class="footer-hr"></div>
      <div class="section-footer__bottom">
        <p>Caroselling Copyright 2025</p>
        <p style="text-decoration: underline;">Realsoft</p>
      </div>
    </Container>
  </footer>
  </template>
  
<style lang="scss" scoped>
.section-footer {
    background-color: #F9F9F9;
    padding-top: 80px;
    font-family: inter;

    &__top {
        display: flex;
        gap: 24px;

        .footer-menu {
            h2 {
                color: #222222;
                text-transform: uppercase;
                margin-bottom: 24px;
            }

            .footer-social-media {
                display: flex;
                align-items: center;
                gap: 16px;
                margin-bottom: 65px;
            }

            p {
                color: #222222;
                font-size: 16px;
                font-weight: 400;
                line-height: 150%;
                width: 610px;
            }
        }

        .section-footer__info {

            .footer-contact-wrapper {
                display: flex;
                gap: 8px;
                margin-bottom: 8px;

                .footer-email {
                    background-color: white;
                    padding: 20px;
                    border-radius: 8px;
                    height: 116px;

                    .email-title {
                        display: flex;
                        gap: 8px;
                        margin-bottom: 40px;
                        width: 341px;
                    }

                    h3 {
                        color: #222222;
                        font-size: 22px;
                        font-weight: 500;
                    }
                }
            }

            .footer-adres {
                background-color: white;
                padding: 20px;
                height: 116px;
                border-radius: 8px;

                .adres-title {
                    display: flex;
                    gap: 8px;
                    margin-bottom: 40px;
                }

                .adres-desc {
                    color: #222222;
                    font-size: 22px;
                    font-weight: 500;
                }
            }
        }
    }

    .footer-hr {
        width: 100%;
        height: 1px;
        background-color: #E0E0E0;
        margin: 40px 0 24px 0   ;
    }
    .section-footer__bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        color: #222222;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 24px;
    }
}


@media (max-width:1400px){
  .container {
    width: 100%;
    max-width: 1070px;
    padding: 0 15px;
  }
  .section-footer__top{
    flex-direction: column;
  }
  .footer-menu > p > br{
    display: none;
  }
  .footer-menu > p{
    width: 100% !important;
  }
  .footer-social-media {
    margin-bottom: 32px !important;
  }
  .wrapper-res{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer-email{
    width: 100%;
  }
}
@media (max-width:812px){
.footer-contact-wrapper{
  flex-direction: column !important;
}
.footer-email > h3{
  font-size: 16px !important;
  font-weight: 400 !important;
}
.footer-adres{
  padding: 15px !important;
}
.footer-email{
  padding: 15px !important;
}
.footer-adres > h3{
  font-size: 16px !important;
  font-weight: 400 !important;
}
}
</style>

<script setup>
import Container from "../layouts/index.vue"
</script>