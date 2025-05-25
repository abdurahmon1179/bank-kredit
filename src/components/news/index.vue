<template>
    <section>
        <div class="news-section">
            <div class="section-title">
                <h2>So‘nggi <span style="color: #00B241;">yangiliklar</span></h2>
            </div>
            <Swiper :modules="[Navigation]" :slides-per-view="3" :space-between="30" :loop="true" navigation
                pagination class="my-swiper">
                <SwiperSlide v-for="(item, index) in news" :key="index" class="news-wrapper">
                    <div class="news-card">
                        <img :src="item.image" alt="">
                        <div class="news-time">
                            <div>
                                <img src="../../../public/images/newcalendar.svg" alt="">
                                <p>{{ item.date }}</p>
                            </div>
                            <div>
                                <img src="../../../public/images/eye.svg" alt="">
                                <p>{{ item.views }}</p>
                            </div>
                        </div>
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.text }}</p>
                        <div class="hover-item">
                            <img src="../../../public/images/hoverst.svg" alt="">
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div class="list-news">
                <button style="cursor: pointer;">Barcha Yangiliklar</button>
            </div>
        </div>
    </section>
</template>


<style scoped>
section {
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.news-section {
    background-color: white;
    width: 1450px;
    height: 720px;
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
    width: 342px;
    height: 388px;
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #F0F0F0;
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

.news-card:hover h3 {
    color: #00B241;
}


.hover-item{
    background-color: #00B241;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
    right: 60px;
    bottom: 20px;
    display: none;
    cursor: pointer;
}


.news-card:hover .hover-item {
    display: flex;
}

</style>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const news = [
    {
        image: '/images/news1.svg',
        date: '04.04.2025 / 15:34',
        views: 992,
        title: 'Saudiya arabistonida muhim kelishuvga erishdi',
        text: 'Ma’lumki, joriy yilning 11-13-may kunlari Saudiya Arabistonining Jidda shahrida Islom taraqqiyot banki guruhi vakillarining 48-yillik yig‘ilishi bo‘lib o‘tdi.'
    },
    {
        image: '/images/new2.svg',
        date: '04.04.2025 / 15:34',
        views: 992,
        title: '"O‘zmilliybank" AJ va Xitoy Eksimbanki o‘rtasida 2 mlrd...',
        text: 'Ma’lumki, joriy yilning 11-13-may kunlari Saudiya Arabistonining Jidda shahrida Islom taraqqiyot banki guruhi vakillarining 48-yillik yig‘ilishi bo‘lib o‘tdi.'
    },
    {
        image: '/images/new3.svg',
        date: '04.04.2025 / 15:34',
        views: 992,
        title: '"Asakabank" AJ Xitoyning Zheshang banki bilan hamkor....',
        text: 'Ma’lumki, joriy yilning 11-13-may kunlari Saudiya Arabistonining Jidda shahrida Islom taraqqiyot banki guruhi vakillarining 48-yillik yig‘ilishi bo‘lib o‘tdi.'
    },
    {
        image: '/images/new3.svg',
        date: '05.04.2025 / 10:15',
        views: 1200,
        title: 'Yangi loyiha ishga tushirildi',
        text: 'O‘zbekiston hukumati yangi texnopark qurilishi haqida e’lon qildi.'
    },
    {
        image: '/images/new2.svg',
        date: '05.04.2025 / 11:00',
        views: 860,
        title: 'Bank sohasida raqamli transformatsiya',
        text: 'Banklar mijozlar uchun yangi onlayn xizmatlarni ishga tushirmoqda.'
    }
]

</script>
