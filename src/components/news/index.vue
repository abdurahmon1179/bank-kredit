<template>
 <div class="section-wrapper-res">
  <section class="section-news">
    <div class="news-section">
      <div class="section-title">
        <h2>So‘nggi <span style="color: #00B241;">yangiliklar</span></h2>
      </div>
  
      <div class="news-list">
        <div class="news-wrapper">
          <div class="news-card">
            <img class="new-banner" src="../../../public/images/new.svg" alt="News Image" />
            <div class="news-time">
              <div>
                <img src="../../../public/images/newcalendar.svg" alt="calendar" />
                <p>2024-05-30</p>
              </div>
              <div>
                <img src="../../../public/images/eye.svg" alt="eye" />
                <p>153</p>
              </div>
            </div>
            <h3>Yangilik sarlavhasi 1</h3>
            <p>Bu yerda yangilik matni bo‘ladi. Bu qisqacha tavsif uchun joy.</p>
           
          </div>
        </div>

        <div class="news-wrapper">
          <div class="news-card">
            <img class="new-banner"  src="../../../public/images/new.svg" alt="News Image" />
            <div class="news-time">
              <div>
                <img src="../../../public/images/newcalendar.svg" alt="calendar" />
                <p>2024-05-30</p>
              </div>
              <div>
                <img src="../../../public/images/eye.svg" alt="eye" />
                <p>153</p>
              </div>
            </div>
            <h3>Yangilik sarlavhasi 1</h3>
            <p>Bu yerda yangilik matni bo‘ladi. Bu qisqacha tavsif uchun joy.</p>
           
          </div>
        </div>
  
        <div class="news-wrapper">
          <div class="news-card">
            <img class="new-banner" src="../../../public/images/new.svg" alt="News Image" />
            <div class="news-time">
              <div>
                <img src="../../../public/images/newcalendar.svg" alt="calendar" />
                <p>2024-05-30</p>
              </div>
              <div>
                <img src="../../../public/images/eye.svg" alt="eye" />
                <p>153</p>
              </div>
            </div>
            <h3>Yangilik sarlavhasi 1</h3>
            <p>Bu yerda yangilik matni bo‘ladi. Bu qisqacha tavsif uchun joy.</p>
          </div>
        </div>




        <div class="news-wrapper">
          <div class="news-card">
            <img class="new-banner" src="../../../public/images/new.svg" alt="News Image" />
            <div class="news-time">
              <div>
                <img src="../../../public/images/newcalendar.svg" alt="calendar" />
                <p>2024-05-30</p>
              </div>
              <div>
                <img src="../../../public/images/eye.svg" alt="eye" />
                <p>153</p>
              </div>
            </div>
            <h3>Yangilik sarlavhasi 1</h3>
            <p>Bu yerda yangilik matni bo‘ladi. Bu qisqacha tavsif uchun joy.</p>
          </div>
        </div>
      </div>
  
        <div class="carusel-right">
          <img src="../../../public/images/caruselright.svg" alt="">
        </div>
        <div class="carusel-left">
          <img src="../../../public/images/caruselleft.svg" alt="">
        </div>
      <div class="list-news news-btn">
        <button style="cursor: pointer; text-transform: uppercase; font-weight: 600; font-size: 16px;">Barcha yangiliklar</button>
      </div>
    </div>
  </section>
 </div>
  </template>
  









<style lang="scss" scoped>
.section-news {
    background-color: #F9F9F9;
    padding-top: 80px;
    display: flex;
    justify-content: center;
    font-family: inter;

    .news-section {
        background-color: white;
        position: relative;
        height: 720px;
        padding: 80px 30px 0px 30px;
        border-radius: 16px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

        .section-title {
            display: flex;
            justify-content: center;
            margin-bottom: 40px;

            >h2 {
                font-size: 40px;
                font-weight: 600;
            }
        }

        .news-list {
            display: flex;
            gap: 24px;
        }

        .news-wrapper {
            display: flex;
            gap: 24px;
            justify-content: center;


            .news-card {
                background-color: #ffffff;
                padding: 20px;
                border-radius: 12px;
                border: 1px solid #f0f0f0;
                position: relative;
                width: 330px;

                &:hover {
                    background-color: #00b241;
                }

                &::after {
                    font-size: 18px;
                    font-weight: bold;
                }

                .new-banner {
                    width: 290px;
                    height: 170px;
                }

                .news-time {
                    display: flex;
                    justify-content: space-between;
                    margin: 16px 0;
                    width: 290px;

                    div {
                        display: flex;
                        gap: 8px;
                    }
                }

                >h3 {
                    color: #222222;
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 8px;
                }

                >p {
                    color: #222222;
                    font-size: 14px;
                    font-weight: 400;
                    width: 290px;

                }



                &:hover {
                    border: 1px solid #00b241;
                    background-color: #ecfbf0;

                    h3 {
                        color: #00b241;
                    }

                    .hover-item {
                        display: flex;
                    }
                }
            }
        }

        .list-news {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 40px;
            >button {
                width: 210px;
                height: 48px;
                border-radius: 12px;
                border: 1px solid #f0f0f0;
                background-color: #f9f9f9;
                cursor: pointer;
            }
        }
        .carusel-right {
            background-color: #FFFFFF;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 15px;
            top: 350px;
            cursor: pointer;
        }

        .carusel-left {
            background-color: #FFFFFF;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 15px;
            top: 350px;
            cursor: pointer;
        }

    }

}



@media (max-width:1400px){
  .section-wrapper-res{
    width: 100%;
    max-width: 1070px;
    padding: 80px 15px;
    margin: 0 auto;
  }
  .news-section{
    height: 1000px !important;
  }
  .news-list{
    width: 768px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .carusel-left{
    display: none !important;
  }
  .carusel-right{
    display: none !important;
  }
}

@media(max-width:870px){
  .news-list{
    flex-direction: column;
    width: 450px;
  }
  .news-section{
    height: 1700px !important;
  }
}
</style>