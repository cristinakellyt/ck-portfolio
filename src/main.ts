import '@/assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BaseWidth from '@/components/common/BaseWidth.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('base-width', BaseWidth)

app.mount('#app')
