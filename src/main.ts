import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import App from './App.vue'
import router from './router'
import Vue3Lottie from 'vue3-lottie'

const app = createApp(App)

app.use(Vue3Lottie, { name: 'Vue3Lottie' })
app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura,
  },
  options: {
    darkModeSelector: 'system',
  },
})

app.use(createPinia())
app.use(router)

app.mount('#app')
