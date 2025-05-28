<template>
    <section>
      <Container>
        <div class="hero-title">
          <h1>{{ $t('hero.title') }} <span style="color: #00B241;">{{ $t('hero.highlight') }}</span></h1>
        </div>
  
        <div class="currency-wrapper">
          <div class="currency-rates">
            <div class="currency-card">
              <div class="currency-title">
                <p>{{ $t('currency.title') }}</p>
                <img src="/images/arrow.svg" alt="arrow" />
              </div>
              <div class="calendar">
                <img src="/images/calendar.svg" alt="calendar" />
                <p>{{ date }}</p>
              </div>
            </div>
  
            <div v-for="currency in currencies" :key="currency.Ccy" class="country-currency-card">
              <img class="country-flag" :src="`/images/${currency.flag}`" :alt="currency.CcyNm_UZ" />
              <div class="usa-currency">
                <p>{{ currency.Ccy }} = {{ currency.Rate }}</p>
                <span :style="{ color: currency.Change > 0 ? '#009423' : (currency.Change < 0 ? '#D32F2F' : '#000000') }">
                  {{ currency.Change > 0 ? '+' : '' }}{{ currency.Change }}
                </span>
              </div>
              <img class="graph" :src="`/images/${currency.Change >= 0 ? 'plus' : 'minus'}.svg`"
                :alt="currency.Change >= 0 ? 'plus' : 'minus'" />
            </div>
          </div>
  
          <div>
            <div class="currency-stats">
              <div class="currency-stats-card">
                <img src="../../../public/images/cardicon.svg" alt="">
                <div class="card-text">
                  <p>{{ $t('stats.mainRate') }}</p>
                  <h3>14%</h3>
                </div>
              </div>
  
              <div class="currency-stats-card">
                <img src="../../../public/images/keyboard.svg" alt="">
                <div class="card-text">
                  <p>{{ $t('stats.inflation') }}</p>
                  <h3>10,3%</h3>
                </div>
              </div>
  
              <div class="currency-stats-card">
                <img src="../../../public/images/person.svg" alt="">
                <div class="card-text">
                  <p>{{ $t('stats.target') }}</p>
                  <h3>55%</h3>
                </div>
              </div>
            </div>
  
            <div class="section-wrapper">
              <div class="currency-national">
                <h3 class="currency-national-title">{{ $t('reserve.title') }}</h3>
  
                <div class="national-card" style="margin-bottom: 16px;">
                  <h3>{{ $t('reserve.nationalCurrency') }}</h3>
                  <p>{{ $t('reserve.description') }}</p>
                  <div>
                    <p><span>135</span>{{ $t('reserve.unit') }}</p>
                  </div>
                </div>
  
                <div class="national-card">
                  <h3>{{ $t('reserve.nationalCurrency') }}</h3>
                  <p>{{ $t('reserve.description') }}</p>
                  <div>
                    <p><span>789</span>{{ $t('reserve.unit') }}</p>
                  </div>
                </div>
              </div>
  
              <div class="stats-year">
                <div class="stats-year-title">
                  <h3>{{ $t('averageRates.title') }}</h3>
                </div>
                <div class="stat-wrapper">
                  <div>
                    <div class="stats-year-card">
                      <h3>{{ $t('averageRates.currency') }}</h3>
                      <div>
                        <p>{{ $t('averageRates.text1') }}</p>
                        <span>17,2%</span>
                      </div>
                      <hr>
                      <div>
                        <p>{{ $t('averageRates.text2') }}</p>
                        <span>17,2%</span>
                      </div>
                    </div>
  
                    <div class="stats-year-card">
                      <h3>{{ $t('averageRates.currency') }}</h3>
                      <div>
                        <p>{{ $t('averageRates.text1') }}</p>
                        <span>17,2%</span>
                      </div>
                      <hr>
                      <div>
                        <p>{{ $t('averageRates.text2') }}</p>
                        <span>17,2%</span>
                      </div>
                    </div>
                  </div>
  
                  <div class="stat-line-graph">
                    <h3>{{ $t('averageRates.graphTitle') }}</h3>
                    <div>
                      <apexchart width="320px" height="340" type="area" :options="chartOptions" :series="series" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </template>
  




<style scoped>
section {
    background-color: #F9F9F9;
}

.currency-wrapper {
    display: flex;
    gap: 24px;
}

.hero-title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 48px;
}

.currency-rates {
    background-color: #F9F9F9;
    padding: 8px;
    border-radius: 12px;
    width: 342px;
    height: 603px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 1px solid #F0F0F0;
}

.currency-card {
    padding: 8px 20px;
    border-radius: 8px;
    background-color: white;
    border: 1px solid #F0F0F0;
}

.currency-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.calendar {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
}

.country-currency-card {
    padding: 8px 20px;
    border-radius: 8px;
    background-color: white;
    border: 1px solid #F0F0F0;
    display: flex;
    align-items: center;
    gap: 16px;
    height: 64px;
}

.usa-currency {
    width: 189px;
}

.currency-stats {
    background-color: #F9F9F9;
    width: 1000px;
    height: 131px;
    border: 1px solid #F0F0F0;
    border-radius: 12px;
    padding: 8px;
    display: flex;
    gap: 24px;
}

.currency-stats-card {
    width: 311px;
    height: 115px;
    background-color: white;
    padding: 16px 20px 20px 20px;
    border-radius: 8px;
    border: 1px solid #E9E9E9;
}

.card-text>h3 {
    font-size: 32px;
    font-weight: 600;
    margin-top: -15px;
}

.card-text {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.card-text>p {
    font-size: 18px;
    font-weight: 500;
}

.section-wrapper {
    margin-top: 24px;
    display: flex;
    gap: 24px;
}

.currency-national {
    padding: 16px;
    background-color: #F9F9F9;
    width: 330px;
    height: 450px;
    border-radius: 8px;
    border: 1px solid #E9E9E9;
}

.currency-national-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 24px;
}

.national-card {
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #E9E9E9;
    height: 175px;
}

.national-card>h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
}

.national-card>p {
    color: #A2A3A5;
    margin-bottom: 15px;
}

.national-card>div {
    display: flex;
    align-items: end;
    gap: 8px;
}

.national-card>div>p>span {
    font-size: 42px;
    font-weight: 600;
}

.national-card>div>p {
    font-size: 16px;
}

.stats-year {
    background-color: #F9F9F9;
    width: 650px;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid #E9E9E9;

}

.stats-year-card {
    margin-top: 19px;
    background-color: white;
    width: 270px;
    height: 177px;
    border: 1px solid #E9E9E9;
    border-radius: 8px;
    padding: 10px;
}

.stats-year-card>div {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
}

.stats-year-card>div>p {
    font-size: 13px;
    font-weight: 400;
    color: #A2A3A5;
}

.stats-year-card>div>span {
    background-color: #F9F9F9;
    width: 54px;
    height: 36px;
    border: 1px solid #F0F0F0;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.stats-year-card>hr {
    margin-top: 12px;
}

.stat-wrapper {
    display: flex;
    gap: 16px;

}

.stat-line-graph {
    margin-top: 20px;
    width: 330px;
    background-color: white;
    border: 1px solid #E9E9E9;
    border-radius: 8px;
    height: 370px;
}

.stat-line-graph>h3 {
    padding-left: 20px;
    padding-top: 10px;
}

.country-flag {
    width: 32px;
    height: 24px;
}

.graph {
    width: 33px;
    height: 20px;
}
</style>



<script setup>
import Container from "../layouts/index.vue"
import { ref } from 'vue'
import ApexCharts from 'apexcharts'
import currenciesData from '../../assets/currency.json'

const date = ref('12.06.2025')
const currencies = ref(currenciesData)

defineExpose({ ApexCharts })

const series = ref([
    {
        name: 'Tovar Narxi',
        data: [20.0, 21.0, 22.0, 22.5]
    }
])

const chartOptions = ref({
    chart: {
        type: 'area',
        stacked: false,
        zoom: {
            enabled: true,
            type: 'x',
            autoScaleYaxis: false
        },
        toolbar: {
            show: false
        }
    },

    dataLabels: {
        enabled: false
    },

    markers: {
        size: 4,
        colors: ['#00b241'],
        strokeColors: '#fff',
        strokeWidth: 2
    },

    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
        }
    },

    yaxis: {
        min: 20,
        max: 22.5,
        tickAmount: 6,
        labels: {
            formatter: val => val.toFixed(1)
        }
    },

    xaxis: {
        type: 'category',
        categories: ['2022', '2023', '2024', '2025'],
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },

    tooltip: {
        shared: false,
        y: {
            formatter: val => val.toFixed(2)
        },
    },

    legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left'
    }
})
</script>
