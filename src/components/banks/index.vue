<template>
    <Container>
        <div class="banks">
            <div class="banks-title">
                <p v-html="$t('banks.title')"></p>
            </div>

            <div class="bank-cards-wrapper">
                <div class="bank-card">
                    <div class="bank-card-title">
                        <img src="../../../public/images/agrobank.svg" alt="">
                        <h3>{{ $t("banks.agrobank.name") }}</h3>
                    </div>
                    <hr>
                    <div class="bank-data-wrapper">
                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/tel.svg" alt="">
                                <img class="hover-img" src="../../../public/images/call.svg" alt="">
                                <p>{{ $t("banks.agrobank.phoneLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/callcenter.svg" alt="">
                                <img class="hover-img" src="../../../public/images/asist.svg" alt="">
                                <p>{{ $t("banks.agrobank.callCenterLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/location.svg" alt="">
                                <img class="hover-img" src="../../../public/images/lakatsiya.svg" alt="">
                                <p>{{ $t("banks.agrobank.addressLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.address") }}</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/onlineloc.svg" alt="">
                                <img class="hover-img" src="../../../public/images/loconline.svg" alt="">
                                <p>{{ $t("banks.agrobank.emailLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.email") }}</p>
                            </div>
                        </div>
                    </div>
                    <button>
                        <p>{{ $t("banks.agrobank.button") }}</p>
                        <img src="../../../public/images/btnarrow.svg" alt="">
                    </button>
                </div>





                <div class="bank-card">
                    <div class="bank-card-title">
                        <img src="../../../public/images/tbc.svg" alt="">
                        <h3>TBC BANK</h3>
                    </div>
                    <hr>
                    <div class="bank-data-wrapper">
                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/tel.svg" alt="">
                                <img class="hover-img" src="../../../public/images/call.svg" alt="">
                                <p>{{ $t("banks.agrobank.phoneLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/callcenter.svg" alt="">
                                <img class="hover-img" src="../../../public/images/asist.svg" alt="">
                                <p>{{ $t("banks.agrobank.callCenterLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/location.svg" alt="">
                                <img class="hover-img" src="../../../public/images/lakatsiya.svg" alt="">
                                <p>{{ $t("banks.agrobank.addressLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.address") }}</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/onlineloc.svg" alt="">
                                <img class="hover-img" src="../../../public/images/loconline.svg" alt="">
                                <p>{{ $t("banks.agrobank.emailLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.email") }}</p>
                            </div>
                        </div>
                    </div>
                    <button>
                        <p>{{ $t("banks.agrobank.button") }}</p>
                        <img src="../../../public/images/btnarrow.svg" alt="">
                    </button>
                </div>




                <div class="bank-card">
                    <div class="bank-card-title">
                        <img src="../../../public/images/ipak.svg" alt="">
                        <h3>Ipak yo‘li banki</h3>
                    </div>
                    <hr>
                    <div class="bank-data-wrapper">
                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/tel.svg" alt="">
                                <img class="hover-img" src="../../../public/images/call.svg" alt="">
                                <p>{{ $t("banks.agrobank.phoneLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/callcenter.svg" alt="">
                                <img class="hover-img" src="../../../public/images/asist.svg" alt="">
                                <p>{{ $t("banks.agrobank.callCenterLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/location.svg" alt="">
                                <img class="hover-img" src="../../../public/images/lakatsiya.svg" alt="">
                                <p>{{ $t("banks.agrobank.addressLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.address") }}</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/onlineloc.svg" alt="">
                                <img class="hover-img" src="../../../public/images/loconline.svg" alt="">
                                <p>{{ $t("banks.agrobank.emailLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.email") }}</p>
                            </div>
                        </div>
                    </div>
                    <button>
                        <p>{{ $t("banks.agrobank.button") }}</p>
                        <img src="../../../public/images/btnarrow.svg" alt="">
                    </button>
                </div>


                <div class="bank-card">
                    <div class="bank-card-title">
                        <img src="../../../public/images/uzum.svg" alt="">
                        <h3>Uzum bank</h3>
                    </div>
                    <hr>
                    <div class="bank-data-wrapper">
                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/tel.svg" alt="">
                                <img class="hover-img" src="../../../public/images/call.svg" alt="">
                                <p>{{ $t("banks.agrobank.phoneLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/callcenter.svg" alt="">
                                <img class="hover-img" src="../../../public/images/asist.svg" alt="">
                                <p>{{ $t("banks.agrobank.callCenterLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/location.svg" alt="">
                                <img class="hover-img" src="../../../public/images/lakatsiya.svg" alt="">
                                <p>{{ $t("banks.agrobank.addressLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.address") }}</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/onlineloc.svg" alt="">
                                <img class="hover-img" src="../../../public/images/loconline.svg" alt="">
                                <p>{{ $t("banks.agrobank.emailLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.email") }}</p>
                            </div>
                        </div>
                    </div>
                    <button>
                        <p>{{ $t("banks.agrobank.button") }}</p>
                        <img src="../../../public/images/btnarrow.svg" alt="">
                    </button>
                </div>




                <div class="bank-card">
                    <div class="bank-card-title">
                        <img src="../../../public/images/yangi.svg" alt="">
                        <h3>Yangi bank</h3>
                    </div>
                    <hr>
                    <div class="bank-data-wrapper">
                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/tel.svg" alt="">
                                <img class="hover-img" src="../../../public/images/call.svg" alt="">
                                <p>{{ $t("banks.agrobank.phoneLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/callcenter.svg" alt="">
                                <img class="hover-img" src="../../../public/images/asist.svg" alt="">
                                <p>{{ $t("banks.agrobank.callCenterLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/location.svg" alt="">
                                <img class="hover-img" src="../../../public/images/lakatsiya.svg" alt="">
                                <p>{{ $t("banks.agrobank.addressLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.address") }}</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/onlineloc.svg" alt="">
                                <img class="hover-img" src="../../../public/images/loconline.svg" alt="">
                                <p>{{ $t("banks.agrobank.emailLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.email") }}</p>
                            </div>
                        </div>
                    </div>
                    <button>
                        <p>{{ $t("banks.agrobank.button") }}</p>
                        <img src="../../../public/images/btnarrow.svg" alt="">
                    </button>
                </div>



                <div class="bank-card">
                    <div class="bank-card-title">
                        <img src="../../../public/images/aloqa.svg" alt="">
                        <h3>AloqaBank</h3>
                    </div>
                    <hr>
                    <div class="bank-data-wrapper">
                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/tel.svg" alt="">
                                <img class="hover-img" src="../../../public/images/call.svg" alt="">
                                <p>{{ $t("banks.agrobank.phoneLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/callcenter.svg" alt="">
                                <img class="hover-img" src="../../../public/images/asist.svg" alt="">
                                <p>{{ $t("banks.agrobank.callCenterLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/location.svg" alt="">
                                <img class="hover-img" src="../../../public/images/lakatsiya.svg" alt="">
                                <p>{{ $t("banks.agrobank.addressLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.address") }}</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/onlineloc.svg" alt="">
                                <img class="hover-img" src="../../../public/images/loconline.svg" alt="">
                                <p>{{ $t("banks.agrobank.emailLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.email") }}</p>
                            </div>
                        </div>
                    </div>
                    <button>
                        <p>{{ $t("banks.agrobank.button") }}</p>
                        <img src="../../../public/images/btnarrow.svg" alt="">
                    </button>
                </div>



                <div class="bank-card">
                    <div class="bank-card-title">
                        <img src="../../../public/images/asia.svg" alt="">
                        <h3>Asia alliance bank</h3>
                    </div>
                    <hr>
                    <div class="bank-data-wrapper">
                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/tel.svg" alt="">
                                <img class="hover-img" src="../../../public/images/call.svg" alt="">
                                <p>{{ $t("banks.agrobank.phoneLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/callcenter.svg" alt="">
                                <img class="hover-img" src="../../../public/images/asist.svg" alt="">
                                <p>{{ $t("banks.agrobank.callCenterLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/location.svg" alt="">
                                <img class="hover-img" src="../../../public/images/lakatsiya.svg" alt="">
                                <p>{{ $t("banks.agrobank.addressLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.address") }}</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/onlineloc.svg" alt="">
                                <img class="hover-img" src="../../../public/images/loconline.svg" alt="">
                                <p>{{ $t("banks.agrobank.emailLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.email") }}</p>
                            </div>
                        </div>
                    </div>
                    <button>
                        <p>{{ $t("banks.agrobank.button") }}</p>
                        <img src="../../../public/images/btnarrow.svg" alt="">
                    </button>
                </div>



                <div class="bank-card">
                    <div class="bank-card-title">
                        <img src="../../../public/images/davr.svg" alt="">
                        <h3>Davrbank</h3>
                    </div>
                    <hr>
                    <div class="bank-data-wrapper">
                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/tel.svg" alt="">
                                <img class="hover-img" src="../../../public/images/call.svg" alt="">
                                <p>{{ $t("banks.agrobank.phoneLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/callcenter.svg" alt="">
                                <img class="hover-img" src="../../../public/images/asist.svg" alt="">
                                <p>{{ $t("banks.agrobank.callCenterLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/location.svg" alt="">
                                <img class="hover-img" src="../../../public/images/lakatsiya.svg" alt="">
                                <p>{{ $t("banks.agrobank.addressLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.address") }}</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/onlineloc.svg" alt="">
                                <img class="hover-img" src="../../../public/images/loconline.svg" alt="">
                                <p>{{ $t("banks.agrobank.emailLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.email") }}</p>
                            </div>
                        </div>
                    </div>
                    <button>
                        <p>{{ $t("banks.agrobank.button") }}</p>
                        <img src="../../../public/images/btnarrow.svg" alt="">
                    </button>
                </div>




                <div class="bank-card">
                    <div class="bank-card-title">
                        <img src="../../../public/images/hamkor.svg" alt="">
                        <h3>Hamkor bank</h3>
                    </div>
                    <hr>
                    <div class="bank-data-wrapper">
                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/tel.svg" alt="">
                                <img class="hover-img" src="../../../public/images/call.svg" alt="">
                                <p>{{ $t("banks.agrobank.phoneLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/callcenter.svg" alt="">
                                <img class="hover-img" src="../../../public/images/asist.svg" alt="">
                                <p>{{ $t("banks.agrobank.callCenterLabel") }}</p>
                            </div>
                            <div>
                                <p>+998 12 345 67 89</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/location.svg" alt="">
                                <img class="hover-img" src="../../../public/images/lakatsiya.svg" alt="">
                                <p>{{ $t("banks.agrobank.addressLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.address") }}</p>
                            </div>
                        </div>

                        <div class="bank-phone">
                            <div class="phone-number">
                                <img class="default-img" src="../../../public/images/onlineloc.svg" alt="">
                                <img class="hover-img" src="../../../public/images/loconline.svg" alt="">
                                <p>{{ $t("banks.agrobank.emailLabel") }}</p>
                            </div>
                            <div>
                                <p>{{ $t("banks.agrobank.email") }}</p>
                            </div>
                        </div>
                    </div>
                    <button>
                        <p>{{ $t("banks.agrobank.button") }}</p>
                        <img src="../../../public/images/btnarrow.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="bank-list">
                <button>{{ $t('banks.allBanksButton') }}</button>
</div>

        </div>
    </Container>
</template>

<style scoped>
.banks {
    margin-top: 80px;
}

.banks-title {
    font-size: 40px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
}

.bank-card {
    width: 439px;
    height: 362px;
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #E9E9E9;
}

.bank-card-title {
    display: flex;
    align-items: center;
    gap: 16px;
}

.bank-card-title>h3 {
    font-size: 22px;
    font-weight: 600;
}

.bank-card>hr {
    margin-top: 16px;
    margin-bottom: 16px;
}

.bank-phone {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.phone-number {
    display: flex;
    align-items: center;
    gap: 6px;
}

.bank-data-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 32px;
}

.bank-card>button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    height: 48px;
    background-color: #F9F9F9;
    border: 1px solid #F0F0F0;
    color: black;
    font-size: 16px;
    font-weight: 600;
    border-radius: 12px;
    cursor: pointer;
}

.bank-cards-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: space-between;
}

.bank-list {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
}

.bank-list>button {
    width: 181px;
    height: 48px;
    background-color: white;
    border: 1px solid #F0F0F0;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}


.bank-card:hover {
    border: 1px solid #00B241;
}

.bank-card:hover>button {
    background-color: #00B241;
}


.bank-card .hover-img {
    display: none;
}

.bank-card:hover .default-img {
    display: none;
}

.bank-card:hover .hover-img {
    display: inline-block;
}

.bank-card:hover button {
  background-color: #00B241; /* zangori */
}

.bank-card:hover button p {
  color: white;
}

.bank-card:hover button img {
  filter: brightness(0) invert(1); /* qora rasmni oq qiladi */
}
</style>

<script setup>
import Container from "../../components/layouts/index.vue"
</script>