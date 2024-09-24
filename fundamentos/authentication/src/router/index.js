import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import AuthFirebaseView from '@/views/AuthFirebaseView.vue'
import AuthSocialView from '@/views/AuthSocialView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/firebase',
      name: 'firebase',
      component: AuthFirebaseView
    },
    {
      path: '/social',
      name: 'social',
      component: AuthSocialView
    }
  ]
})

export default router
