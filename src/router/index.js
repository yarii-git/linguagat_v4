import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import { useAuthStore } from '@/stores/auth'

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
      component: () => import('../views/HomeView.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/lesson/:id',
      name: 'lesson',
      component: () => import('../views/LessonView.vue'),
      props: true,
      meta: {
        requireAuth: true
      }
    }
  ]
})
//Routes protection
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  const isAuth = auth.role

  const requireAuth = to.meta.requireAuth

  if (requireAuth && !isAuth) {
    return next('/')
  }
  next()
})

export default router
