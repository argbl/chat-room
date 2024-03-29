import Message from '@/components/base/base-message'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: 'chat/:id',
        name: 'Chat',
        component: () => import('../views/chat-room/index.vue'),
      },
      {
        path: 'explore/:id?',
        name: 'Explore',
        component: () => import('../views/explore/index.vue'),
      },
      {
        path: 'room/:id',
        name: 'Room',
        component: () => import('../views/chat-room/index.vue'),
      },
    ],
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
    path: '/redirect',
    name: 'Redirect',
    component: () => import('../views/redirect/index.vue'),
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

  if (
    !isAuthenticated() &&
    !['/login', '/register', '/redirect'].includes(to.path)
  ) {
    // 将用户重定向到登录页面
    return { name: 'Login' }
  }

  if (['/login', '/register'].includes(to.path) && isAuthenticated()) {
    Message.error('您已登录')
    return { path: '/' }
  }
})

export default router
