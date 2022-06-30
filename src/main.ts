import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'
import MyCp from './components'
createApp(App).use(router).use(MyCp).mount('#app')
