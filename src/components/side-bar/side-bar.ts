import { ref, h } from 'vue'
import { useRoute } from 'vue-router'
import HomeBar from './home-bar.vue'
import ExploreBar from './explore-bar.vue'
import UserStatus from './user-status.vue'
export default {
  setup() {
    const route = useRoute()
    // 返回渲染函数
    return () =>
      route.path === '/'
        ? h(HomeBar, null, {
            default: () => h(UserStatus),
          })
        : h(ExploreBar, null, {
            default: () => h(UserStatus),
          })
  },
}