import '@/assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BaseWidth from '@/components/common/BaseWidth.vue'
import SectionHeader from '@/components/common/SectionHeader.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseCard from '@/components/common/BaseCard.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('base-width', BaseWidth)
app.component('section-header', SectionHeader)
app.component('base-button', BaseButton)
app.component('base-card', BaseCard)

app.mount('#app')
