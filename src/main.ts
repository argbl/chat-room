import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'
import { createPinia } from 'pinia'
import BaseComp from './components/base/index'

import loadingDirective from '@cp/loading-status/directive'
createApp(App)
  .use(router)
  .use(createPinia())
  .use(BaseComp)
  .directive('loading', loadingDirective)
  .mount('#app')
