import { ref, h } from 'vue'
import { useRoute } from 'vue-router'
import HomeBar from './home-bar/index.vue'
import ExploreBar from './explore-bar/index.vue'
import UserStatus from './home-bar/user-status/index.vue'
import ChannelBar from './channel-bar/index.vue'
export default {
  setup() {
    const route = useRoute()
    // 返回渲染函数
    return () =>
      route.path === '/' || route.name === 'Chat'
        ? h(HomeBar, null, {
            default: () => h(UserStatus),
          })
        : route.name === 'Explore'
        ? h(ExploreBar, null, {
            default: () => h(UserStatus),
          })
        : h(ChannelBar, null, {
            default: () => h(UserStatus),
          })
  },
}
