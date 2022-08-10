import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import BaseComp from './components/base/index'

import loadingDirective from '@/components/loading-status'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createApp(App)
  .use(router)
  .use(pinia)
  .use(BaseComp)
  .directive('loading', loadingDirective)
  .mount('#app')
