import { ref, h } from 'vue'
import { useRoute } from 'vue-router'
import FriendsView from './FriendsView.vue'
import ExploreView from './ExploreView.vue'

export default {
  setup() {
    const route = useRoute()
    // 返回渲染函数
    return () => (route.path === '/' ? h(FriendsView) : h(ExploreView))
  },
}
