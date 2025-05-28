<template>
    <section>
      <div class="service">
        <div class="service-title">
          <p>{{ $t('service.title') }} <span style="color: #00B241;">{{ $t('service.highlight') }}</span></p>
        </div>
        <div class="service-card-wrapper">
          <div class="service-card">
            <div class="service-card-text">
              <h3>{{ $t('service.cards.kredit.title') }}</h3>
              <p>{{ $t('service.cards.kredit.text') }}</p>
              <button>
                <p>{{ $t('service.cards.button') }}</p>
                <img src="../../../public/images/btnarrow.svg" alt="" />
              </button>
            </div>
            <div class="service-img">
              <img src="../../../public/images/service.svg" alt="" />
            </div>
          </div>
  
          <div class="service-card card-hover">
            <div class="service-card-text">
              <h3>{{ $t('service.cards.savodxonlik.title') }}</h3>
              <p>{{ $t('service.cards.savodxonlik.text') }}</p>
              <button>
                <p>{{ $t('service.cards.button') }}</p>
                <img src="../../../public/images/btnarrow.svg" alt="" />
              </button>
            </div>
            <div class="service-img">
              <img src="../../../public/images/service2.svg" alt="" />
            </div>
          </div>
  
          <div class="service-card card-hover">
            <div class="service-card-text">
              <h3>{{ $t('service.cards.murojaat.title') }}</h3>
              <p>{{ $t('service.cards.murojaat.text') }}</p>
              <button>
                <p>{{ $t('service.cards.button') }}</p>
                <img src="../../../public/images/btnarrow.svg" alt="" />
              </button>
            </div>
            <div class="service-img">
              <img src="../../../public/images/service3.svg" alt="" />
            </div>
          </div>
  
          <div class="service-card">
            <div class="service-card-text">
              <h3>{{ $t('service.cards.ariza.title') }}</h3>
              <p>{{ $t('service.cards.ariza.text') }}</p>
              <button>
                <p>{{ $t('service.cards.button') }}</p>
                <img src="../../../public/images/btnarrow.svg" alt="" />
              </button>
            </div>
            <div class="service-img">
              <img src="../../../public/images/service4.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  

<style scoped>
section {
    margin-top: 80px;
    display: flex;
    justify-content: center;
}

.service {
    background-color: white;
    width: 1450px;
    padding: 80px 48px;
    border-radius: 16px;
    border: 1px solid #F0F0F0;
}

.service-title {
    font-size: 40px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

.service-card {
    width: 664px;
    height: 284px;
    background-color: white;
    border-radius: 16px;
    border: 1px solid #00B241;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.service-card-text {
    padding: 24px;
}

.service-card-text>h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
}

.service-card-text>p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
    color: #383838;
    width: 320px;
}

.service-card-text>button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 135px;
    height: 48px;
    font-size: 16px;
    font-weight: 600;
    gap: 8px;
    border: 1px solid #00B241;
    border-radius: 12px;
    background-color: white;
    cursor: pointer;
    margin-top: 78px;
}

.service-img {
    padding: 12px;
}

.service-card-wrapper{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
}
.service-card {
    position: relative;
    overflow: hidden;
    transition: 0.3s;
}

.service-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 400px;
    background: linear-gradient(to bottom right, #00b24145 0%, #00b24152 50%, transparent 50%, transparent 100%);
    clip-path: path("M0 0H104.426L159.1 126.087C163.502 136.239 163.502 147.761 159.1 157.913L104.426 284H0V0Z");
    -webkit-clip-path: path("M0 0H104.426L159.1 126.087C163.502 136.239 163.502 147.761 159.1 157.913L104.426 284H0V0Z");
    transform: scaleX(0); /* o‘zgartirildi */
    transform-origin: left; /* chapdan boshlasin */
    transition: transform 0.4s ease-out;
    z-index: 0;
    opacity: 1;
}

.service-card:hover::before {
    transform: scaleX(1);
}




.service-card-text,
.service-img {
    position: relative;
    z-index: 1;
}



.card-hover {
    position: relative;
    overflow: hidden;
    transition: 0.3s;
}

.card-hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 400px;
    background: linear-gradient(to bottom right, #d5edfb 0%, #d5edfb, transparent 50%, transparent 100%);
    clip-path: path("M0 0H104.426L159.1 126.087C163.502 136.239 163.502 147.761 159.1 157.913L104.426 284H0V0Z");
    -webkit-clip-path: path("M0 0H104.426L159.1 126.087C163.502 136.239 163.502 147.761 159.1 157.913L104.426 284H0V0Z");
    transform: scaleX(0); /* o‘zgartirildi */
    transform-origin: left; /* chapdan boshlasin */
    transition: transform 0.4s ease-out;
    z-index: 0;
    opacity: 1;
}

.card-hover:hover::before {
    transform: scaleX(1);
}
</style>

<script setup>

</script>