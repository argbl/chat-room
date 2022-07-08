import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'

import loadingDirective from '@cp/loading-status/directive'
createApp(App).use(router).directive('loading', loadingDirective).mount('#app')
