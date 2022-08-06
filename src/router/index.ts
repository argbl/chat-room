import Message from '@/components/base/base-message'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/account-view/AccountView.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/account-view/AccountView.vue'),
  },
  {
    path: '/chat/:id',
    name: 'Chat',
    component: () => import('../views/ChatView.vue'),
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import('../views/ExploreView.vue'),
  },
  {
    path: '/channel',
    name: 'Channel',
    component: () => import('../views/ChannelView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

function isAuthenticated() {
  return !!window.localStorage.getItem('user')
}

router.beforeEach(async (to, from) => {
  console.log('当前登录用户信息', window.localStorage.getItem('user'))

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
