<template>
  <Container>
    <section>
      <div class="news-section">
        <div class="section-title">
          <h2>{{ t('news.latest') }} <span style="color:#00B241;">{{ t('news.newsWord') }}</span></h2>
        </div>

        <Swiper
  :modules="[Navigation, Pagination]"
  :space-between="30"
  :loop="true"
  navigation
  class="my-swiper"
  :breakpoints="{
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    },
    1400: {
      slidesPerView: 4
    }
  }"
>
  <SwiperSlide
    v-for="(item, index) in news"
    :key="index"
    class="news-wrapper"
  >
    <div class="news-card">
      <img class="news-card-img" src="../../../public/images/new.svg" alt="" />
      <div class="news-time">
        <div>
          <img src="../../../public/images/newcalendar.svg" alt="" />
          <p>{{ item.date }}</p>
        </div>
        <div>
          <img src="../../../public/images/eye.svg" alt="" />
          <p>{{ item.views }}</p>
        </div>
      </div>
      <h3>{{ t(item.title) }}</h3>
      <p>{{ t(item.text) }}</p>
    </div>
  </SwiperSlide>
</Swiper>


        <div class="list-news">
          <button style="cursor:pointer;">
            {{ t('news.allNewsBtn') }}
          </button>
        </div>
      </div>
    </section>
  </Container>
</template>

  




  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import { useI18n } from 'vue-i18n'
  import Container from "../layouts/index.vue"
  
  const { t } = useI18n()
  
  const news = [
  {
    image: '/images/news1.svg',
    date: '04.04.2025 / 15:34',
    views: 992,
    title: 'news.title1',
    text: 'news.text1'
  },
  {
    image: '/images/new2.svg',
    date: '04.04.2025 / 15:34',
    views: 992,
    title: 'news.title2',
    text: 'news.text2'
  },
  {
    image: '/images/new3.svg',
    date: '04.04.2025 / 15:34',
    views: 992,
    title: 'news.title3',
    text: 'news.text3'
  },
  {
    image: '/images/new3.svg',
    date: '05.04.2025 / 10:15',
    views: 1200,
    title: 'news.title4',
    text: 'news.text4'
  },
  {
    image: '/images/new2.svg',
    date: '05.04.2025 / 11:00',
    views: 860,
    title: 'news.title5',
    text: 'news.text5'
  }
]

  </script>
  




<style scoped>
section {
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.news-section {
    background-color: white;
    width: 100%;
    position: relative;
    overflow: visible;
    padding: 80px 48px;
    border-radius: 16px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.section-title {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}
.section-title > h2{
    font-size: 40px;
    font-weight: 600;
}
.news-card {
    width: 330px;
    height: 388px;
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #F0F0F0; 
    .news-card-img {
      width: 270px;
    }
}

.news-time {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    margin-bottom: 16px;
}

.news-time>div {
    display: flex;
    align-items: center;
    gap: 8px;
}

.news-card>h3 {
    color: #222222;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
}

.news-card>p {
    color: #222222;
    font-size: 14px;
    font-weight: 400;
}

.news-wrapper {
    display: flex;
    gap: 24px;
    justify-content: center;
}

.news-card:hover {
    border: 1px solid #00B241;
    background-color: #ECFBF0;
}
.list-news{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
}
.list-news > button{
    width: 210px;
    height: 48px;
    border-radius: 12px;
    border: 1px solid #F0F0F0;
    background-color: #F9F9F9;
}

::v-deep(.swiper-button-next),
::v-deep(.swiper-button-prev) {
    width: 48px !important;
    height: 48px !important;
    border: 1px solid #F0F0F0;
    background-color: white !important;
    border-radius: 50% !important;
    color: black !important;
}

::v-deep(.swiper-button-next:hover),
::v-deep(.swiper-button-prev:hover) {
    background-color: #00B241;
    color: white;
}

::v-deep(.swiper-button-next::after),
::v-deep(.swiper-button-prev::after) {
    font-size: 18px;
    font-weight: bold;
}


::v-deep(.swiper-button-next){
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -20px;
  z-index: 100;
}

::v-deep(.swiper-button-prev){
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -20px;
  z-index: 100;
}


.news-card:hover h3 {
    color: #00B241;
}




  
.news-card:hover .hover-item {
    display: flex;
}





@media(max-width:1420px){
    .container {
    width: 100%;
    max-width: 1070px;
    padding: 0 15px;
  }
}
</style>


