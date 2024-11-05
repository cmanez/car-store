import './assets/main.scss'
import MainLayout from './layouts/MainLayout.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { IMaskDirective } from 'vue-imask'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.directive('imask', IMaskDirective)
app.component('MainLayout', MainLayout)
app.mount('#app')
