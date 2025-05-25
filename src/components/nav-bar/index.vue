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
                            <p>KREDIT MAHSULOTLAR</p>
                        </div>
                        <div class="nav-menu-card">
                            <img src="../../../public/images/message.svg" alt="">
                            <p>ARIZA YUBORISH</p>
                        </div>
                        <div class="nav-menu-card">
                            <img src="../../../public/images/checkmessage.svg" alt="">
                            <p>ARIZANI TEKSHIRISH</p>
                        </div>
                    </div>
                    <div class="nav-actions">
                        <div class="nav-select">
                            <img class="js-img" src="../../../public/images/uz.svg" alt="">
                            <select class="js-select">
                                <option value="uz">O'zbekcha</option>
                                <option value="ru">Ruscha</option>
                            </select>
                        </div>
                        <button>
                            <p>KIRISH</p>
                            <img src="../../../public/images/account.svg" alt="">
                        </button>
                    </div>
                </div>
            </nav>
        </Container>
        <hr>
        <ul class="header-menu">
            <li>Bosh sahifa</li>
            <li>Banklar</li>
            <li>Murojaat</li>
            <li>Ariza qoldirish</li>
            <li>Moliyaviy savodhonlik</li>
            <li>Yangiliklar</li>
        </ul>
    </header>
</template>

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

<script setup>
import { onMounted } from 'vue'
import Container from "../layouts/index.vue"

onMounted(() => {
    var elSelect = document.querySelector(".js-select")
    var elImg = document.querySelector(".js-img")

    elSelect.addEventListener("change", () => {
        if (elSelect.value === "uz") {
            elImg.src = "../../../public/images/uz.svg"
        } else {
            elImg.src = "../../../public/images/ru.png"
        }
    })
})

</script>