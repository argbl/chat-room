import Message from '@/components/base/base-message'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('../views/main-view'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/chat/:id',
    name: 'Chat',
    component: () => import('../views/chat/index.vue'),
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import('../views/explore/index.vue'),
  },
  {
    path: '/channel',
    name: 'Channel',
    component: () => import('../views/channel/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

function isAuthenticated() {
  return !!window.localStorage.getItem('RECORD_PINIA_USER')
}

router.beforeEach(async (to, from) => {
  console.log(
    '当前登录用户信息',
    window.localStorage.getItem('RECORD_PINIA_USER')
  )

  if (!isAuthenticated() && !['/login', '/register'].includes(to.path)) {
    // 将用户重定向到登录页面
    return { name: 'Login' }
  }

  if (['/login', '/register'].includes(to.path) && isAuthenticated()) {
    Message.error('您已登录')
    return { path: '/' }
  }
})

export default router
