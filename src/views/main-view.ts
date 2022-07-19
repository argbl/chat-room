import { ref, h } from 'vue'
import { useRoute } from 'vue-router'
import FriendsView from './FriendsView.vue'
import ExploreView from './ExploreView.vue'
import ChannelView from './ChannelView.vue'
import ChatView from './ChatView.vue'
import InBox from '@cp/in-box/in-box.vue'
export default {
  setup() {
    const route = useRoute()
    // 返回渲染函数
    // return () => (route.path === '/' ? h(FriendsView) : h(ExploreView))
    return () =>
      route.path === '/'
        ? h(FriendsView, null, {
            default: () => h(InBox),
          })
        : route.name === 'Chat'
        ? h(ChatView, null, {
            default: () => h(InBox),
          })
        : route.name === 'Explore'
        ? h(ExploreView)
        : h(ChannelView)
  },
}
