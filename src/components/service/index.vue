<template>
  <section class="section-service">
    <div class="section-service__outlay">
      <Container>
        <div class="section-service__title">
          <p>Interaktiv <span>xizmatlar</span></p>
        </div>
        <div class="section-service__wrapper">
          <div class="section-service__card">
            <div class="card-text">
              <strong>Kredit mahsulotlari</strong>
              <p class="service-card-desc">Sizning ehtiyojlaringiz uchun mos kredit turlari. Iste’mol, ipoteka va biznes
                kreditlari.
                <br> Qulay shartlar va tezkor rasmiylashtirish.
              </p>
              <button>
                <p>Batafsil</p>
                <img src="../../../public/images/cardarrow.svg" alt="">
              </button>
            </div>
            <div class="card-img">
              <img src="../../../public/images/cardimg1.svg" alt="">
            </div>
          </div>


          <div class="section-service__card service-card-blue">
            <div class="card-text">
              <strong class="res-str">Moliyaviy savodxonlik</strong>
              <p class="service-card-desc service-card-second-p res-p">Pulni to‘g‘ri boshqarishni o‘rganing. <br>
                Budjet tuzish, tejash va investitsiya bo‘yicha maslahatlar. Moliyaviy mustaqillikka birinchi qadam.
              </p>
              <button class="service-card-second-btn">
                <p>Batafsil</p>
                <img src="../../../public/images/cardarrow.svg" alt="">
              </button>
            </div>
            <div class="card-img">
              <img src="../../../public/images/cardimg2.svg" alt="">
            </div>
          </div>


          <div class="section-service__card service-card-blue">
            <div class="card-text">
              <strong>Murojaat qoldirish</strong>
              <p class="service-card-desc">Savolingiz, taklifingiz yoki muammoyingiz bormi? Biz har doim eshitishga
                tayyormiz. <br>
                Online murojaat yuboring — tez javob oling.
              </p>
              <button>
                <p>Batafsil</p>
                <img src="../../../public/images/cardarrow.svg" alt="">
              </button>
            </div>
            <div class="card-img">
              <img src="../../../public/images/cardimg3.svg" alt="">
            </div>
          </div>


          <div class="section-service__card">
            <div class="card-text">
              <strong>ariza qoldirish</strong>
              <p class="service-card-desc">Savolingiz, taklifingiz yoki muammoyingiz bormi? Biz har doim eshitishga
                tayyormiz. <br>
                Online murojaat yuboring — tez javob oling.
              </p>
              <button>
                <p>Batafsil</p>
                <img src="../../../public/images/cardarrow.svg" alt="">
              </button>
            </div>
            <div class="card-img">
              <img src="../../../public/images/cardimg4.svg" alt="">
            </div>
          </div>
        </div>
      </Container>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.section-service {
  background-color: #F9F9F9;
  padding: 80px 32px;
  font-family: inter;

  &__outlay {
    background-color: white;
    border: 1px solid #F0F0F0;
    border-radius: 16px;
    padding: 80px 35px;

    .section-service__title {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;

      p {
        font-size: 40px;
        font-weight: 600;
        color: #222222;

        span {
          color: #00B241;
        }
      }
    }

    .section-service__wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;

      .section-service__card {
        display: flex;
        height: 284px;
        width: fit-content;
        border-radius: 16px;
        border: 1px solid #F0F0F0;
        padding: 12px;
        background-color: white;
        position: relative;
        overflow: hidden;
        transition: 0.3s;

        &:hover {
          box-shadow: 0px 18px 40px 0px #7090B01F;
          transition: 1s;
          border: 1px solid green;

          .card-text>button {
            transition: 0.5s;
            border: 1px solid green;
          }
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 400px;
          height: 400px;
          background: linear-gradient(to bottom right, #ecfbf0 0%, #ecfbf0 50%, transparent 50%, transparent 100%);
          clip-path: path("M0 0H104.426L159.1 126.087C163.502 136.239 163.502 147.761 159.1 157.913L104.426 284H0V0Z");
          -webkit-clip-path: path("M0 0H104.426L159.1 126.087C163.502 136.239 163.502 147.761 159.1 157.913L104.426 284H0V0Z");
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease-out;
          z-index: 0;
          opacity: 1;
        }

        &:hover::before {
          transform: scaleX(1);
        }

        .card-text {
          position: relative;
          z-index: 1;

          strong {
            color: #222222;
            font-size: 20px;
            font-weight: 600;
            text-transform: uppercase;
          }

          .service-card-desc {
            margin-top: 8px;
            color: #383838;
            font-size: 16px;
            font-weight: 400;
            width: 376px;
            line-height: 150%;
            margin-bottom: 110px;
          }

          button {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px 16px;
            border: 1px solid #F0F0F0;
            border-radius: 12px;
            cursor: pointer;
            background-color: #F9F9F9;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 600;
          }
        }

        .service-card-second-btn {
          margin-top: -25px;
        }
      }


      .service-card-blue {
        display: flex;
        height: 284px;
        width: fit-content;
        border-radius: 16px;
        border: 1px solid #F0F0F0;
        padding: 12px;
        background-color: white;
        position: relative;
        overflow: hidden;
        transition: 1s;

        &:hover {
          box-shadow: 0px 18px 40px 0px #7090B01F;
          transition: 1s;
          border: 1px solid rgb(137, 137, 255);

          .card-text>button {
            transition: 0.5s;
            border: 1px solid rgb(137, 137, 255);
          }
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 400px;
          height: 400px;
          background: linear-gradient(to bottom right, #eef9ff 0%, #eef9ff 50%, transparent 50%, transparent 100%);
          clip-path: path("M0 0H104.426L159.1 126.087C163.502 136.239 163.502 147.761 159.1 157.913L104.426 284H0V0Z");
          -webkit-clip-path: path("M0 0H104.426L159.1 126.087C163.502 136.239 163.502 147.761 159.1 157.913L104.426 284H0V0Z");
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease-out;
          z-index: 0;
          opacity: 1;
        }

        &:hover::before {
          transform: scaleX(1);
        }

        .card-text {
          position: relative;
          z-index: 1;

          strong {
            color: #222222;
            font-size: 20px;
            font-weight: 600;
            text-transform: uppercase;
          }

          .service-card-desc {
            margin-top: 8px;
            color: #383838;
            font-size: 16px;
            font-weight: 400;
            width: 376px;
            line-height: 150%;
            margin-bottom: 110px;
          }

          button {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px 16px;
            border: 1px solid #F0F0F0;
            border-radius: 12px;
            cursor: pointer;
            background-color: #F9F9F9;
          }
        }

        .service-card-second-btn {
          margin-top: -25px;
        }
      }
    }
  }
}

@media (max-width:1400px){
  .container {
    width: 100%;
    max-width: 1070px;
    padding: 0 15px;
  }
  .section-service__card:hover,
  .service-card-blue:hover {
    box-shadow: none !important;
    border: 1px solid #F0F0F0 !important;

    &::before {
      transform: scaleX(0) !important;
    }

    .card-text > button {
      border: 1px solid #F0F0F0 !important;
    }
  }
  .section-service__card{
    flex-direction: column-reverse;
    height: 333px !important;
    padding: 12px !important;
    .card-img{
      display: block !important;
      height: 100%;
    }
    .card-img > img{
      width: 100%;
      object-fit:cover;
      height: 130px;
      border-radius: 12px;
    }
    strong{
      font-size: 14px !important;
      font-weight: 500;
    }
    .service-card-desc{
      color: #A2A3A5 !important;
      margin-bottom: 8px !important;
      margin-top: 12px !important;
      font-size: 12px !important;
      width: 200px !important;
    }
    button{
      background-color: #F5F5F7 !important;
      width: 200px !important;
      height: 36px !important;
      align-items: center !important;
      justify-content: center !important;
      font-size: 12px !important;
    }
    .res-str{
      position: absolute;
      margin-top: -150px;
    }
    .res-p{
      position: absolute;
      top: -135px;
    }
  }
  .section-service__wrapper{
    display: flex;
    justify-content: center;
  }
}
</style>

<script setup>
import Container from "../layouts/index.vue"
</script>