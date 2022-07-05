import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'
import MyCp from './components'
import loadingDirective from '@cp/loading-status/directive'
createApp(App)
  .use(router)
  .use(MyCp)
  .directive('loading', loadingDirective)
  .mount('#app')
