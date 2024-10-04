import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        requireAuth: false
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta:{
        requireAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta:{
        requireAuth: false
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta:{
        requireAuth: true,
        role: 'admin'
      }
    }
  ]
})

// guarda para vigilar que se cumpla lo que queremos
// to -> hacia donde quiere ir el usuario
// from -> de donde viene el usuario
// next -> hacia donde va ir el usuario realmente
router.beforeEach((to, from, next)=> {
  // establecer si el usuario se encuentra atenticado
  // const auth = store.jwt != null para cuando almacenamos el usuario
  // const auth = authService.getMe() 
  // si usamos esta funcion para obtener al usuario actual
  // const auth = $sesion_or_cookie.get('jwt')
  const auth = false
  const needAuth = to.meta.requireAuth
  if (needAuth && !auth){
    next('login')
  }else{
    next()
  }
})

export default router
