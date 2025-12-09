<template>
    <div class="container">
        <div class="d-flex justify-content-between">
            <h4>Stock ({{ items?.length }})</h4>
            <h4 v-if="totalValue">{{ $filters.shortNumber(totalValue, 2) }}</h4>
        </div>

        <div>
            <!-- Progress Bar -->
            <div class="progress mb-3" style="height: 30px;">
                <div v-for="(item,i) in items" :key="item.id" class="progress-bar" :style="{ width: item.percentValue + '%', backgroundColor: colors[i % 10] }"></div>
            </div>

            <!-- Item List -->
            <div v-for="(item,index) in items" :key="index" class="d-flex card border-0">
                <div class="card-body d-flex align-items-center">
                    <div>
                        <p>{{ item.seq }}. </p>
                    </div>
                    <img :src="`https://stockradars-image.com/images/company_logo/${item.symbol}.png`" :alt="`${item.symbol}`" width="60" height="60">
                    <div class="d-flex justify-content-between ms-2 w-100">
                        <div>
                            <div class="d-flex align-items-center">
                                <div class="box_badge me-2" :style="{ backgroundColor: colors[index % 10] }">&nbsp;</div>
                                <p>{{ item.symbol }}</p>
                            </div>
                            <p>Value</p>
                            <p>Volume</p>
                        </div>

                        <div class="text-end">
                            <p>{{ $filters.formatNumber(item.percentValue, 2) }}%</p>
                            <p>{{ $filters.shortNumber(item.value, 2) }} THB</p>
                            <p>{{ $filters.formatNumber(item.volume, 0) }} Shares</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Import Library
import { trackRouter } from "vue-gtag-next"

// Import Vues
import { onMounted, ref } from 'vue'

// Import Data
import jsonData from '@/data/stocks.json'

// States
const colors = ref([ '#334A73', '#E35B4F', '#FFD426', '#80C4A6', '#F09540', '#F0BA40', '#FCF2D9', '#7F8386', '#424241', '#343845' ])
const totalValue = ref(0)
const items = ref(null)

// onMounted
onMounted(() => {
    init()
})

// Functions
const init = () => {
    for (let i = 0; i < jsonData.stocks.length; i++) {
        const item = jsonData.stocks[i];
        totalValue.value += item.value;
    }

    let newArray = []
    for (let index = 0; index < jsonData.stocks.length; index++) {
        const i = jsonData.stocks[index];
        let newObj = {
            seq: index + 1,
            percentValue: calPercentValue(i.value),
            ...i
        }
        newArray.push(newObj)
    }
    items.value = newArray
}

const calPercentValue = (currVal) => {
    return (currVal / totalValue.value) * 100
}
</script>

<style lang="scss" scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.box_badge {
    border-radius: 4px;
    width: 15px;
    height: 15px;
}

.card {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin-bottom: 0.5rem;
}
</style>