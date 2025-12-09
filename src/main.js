import { createApp } from 'vue'

import '@/assets/scss/main.scss'

import { number } from '@/helpers/number.js'

import App from './App.vue'
import VueGtag from "vue-gtag-next"

import router from './router'


const app = createApp(App)
app.config.globalProperties.$filters = { ...number }

app.use(router).use(VueGtag, { property: { id: 'G-1DNDL6WG9V' } })

app.mount('#app')