import MainLayout from '../layouts/MainLayout.vue'
import CarsView from '../views/CarsView.vue'
import HomeView from '../views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: HomeView,
      path: '/',
      name: 'home',
      meta: {
        layout: MainLayout
      }
    },
    {
      component: CarsView,
      path: '/cars',
      name: 'cars',
      meta: {
        layout: MainLayout
      }
    }
  ]
})

export default router
