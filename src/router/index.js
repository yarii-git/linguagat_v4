import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignUpView.vue'),
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
      // meta:{
      //   requireAuth: true,
      //   role: "1"
      // }
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: () => import('../views/ExerciseView.vue')
      // meta:{
      //   requireAuth: true,
      //   role: "1"
      // }
    }
  ]
})

export default router
