import { createRouter, createWebHistory } from 'vue-router'
import { trackRouter } from 'vue-gtag-next'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Portfolio',
            component: HomeView
        }
    ]
})

trackRouter(router)

export default router