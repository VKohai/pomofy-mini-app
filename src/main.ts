import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

if (window.Telegram?.WebApp) {
  console.log(window.Telegram.WebApp.initData)
  window.Telegram.WebApp.ready()
  window.Telegram.WebApp.expand()
}

app.use(createPinia())
app.use(router)

app.mount('#app')
