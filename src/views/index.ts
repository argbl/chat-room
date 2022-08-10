import { h } from 'vue'
import { useRoute } from 'vue-router'
import FriendsView from './friend/index.vue'
import ExploreView from './explore/index.vue'
import ChannelView from './channel/index.vue'
import ChatView from './chat/index.vue'
import InBox from '@/components/in-box/index.vue'
export default {
  setup() {
    const route = useRoute()
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
