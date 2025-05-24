<template>
    <Container>
        <footer>
            <div class="footer-first">
                <div class="footer-menu">
                    <h2>Kontaktlar</h2>
                    <div class="social-media">
                        <img src="../../../public/images/insta.svg" alt="">
                        <img src="../../../public/images/youtube.svg" alt="">
                        <img src="../../../public/images/telegram.svg" alt="">
                    </div>
                    <p>Bank-kredit.uz - Тадбиркорлик субъектлари учун тижорат банклари томонидан таклиф қилинаётган кредит маҳсулотлари, хизматларини ўз ичига олган платформа.</p>
                </div>
                <div class="footer-info">
                    <div class="cards">
                        <div class="info-email">
                            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 40px;">
                                <img src="../../../public/images/info.svg" alt="">
                                <p>Elektron manzil</p>
                            </div>
                            <p>info@bank-kredit.uz</p>
                        </div>

                        <div class="info-email">
                            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 40px;">
                                <img src="../../../public/images/callf.svg" alt="">
                                <p>telefon raqam</p>
                            </div>
                            <p>+998 71 200 00 44</p>
                        </div>
                    </div>
                    <div class="info-adres">
                        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 40px;">
                            <img src="../../../public/images/loc.svg" alt="">
                            <p>Manzil</p>
                        </div>
                        <p>Кичик Халқа Йўли 38/1, 100084, Тошкент, Тошкент, Ўзбекистон</p>
                    </div>
                </div>
            </div>
            <hr>
            <div class="footer-second">
                <p>Caroselling Copyright 2025</p>
                <p>Realsoft</p>
            </div>
        </footer>
    </Container>
</template>

<style scoped>
footer{
    margin-top: 80px;
}
.footer-menu > h2{
    color: #222222;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 24px;
}
.footer-first{
    display: flex;
    justify-content: space-between;
}
.cards{
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
}
.social-media{
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 50px;
}
.footer-menu > p{
    color: #222222;
    font-size: 16px;
    font-weight: 400;
    width: 550px;
    line-height: 150%;
}
.info-email{
    width: 381px;
    height: 116px;
    background-color: white;
    border-radius: 8px;
    padding: 20px;
}
.info-adres{
    width: 770px;
    height: 116px;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
}
footer > hr{
    margin-top: 40px;
    margin-bottom: 24px;
}
.footer-second{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
}
</style>

<script setup>
import Container from "../layouts/index.vue"
</script>