import { h } from 'vue'
import { useRoute } from 'vue-router'
import FriendsView from './friend/index.vue'
import ExploreView from './explore/index.vue'
import ChatRoomView from './chat-room/index.vue'
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
        ? h(ChatRoomView, null, {
            default: () => h(InBox),
          })
        : route.name === 'Explore'
        ? h(ExploreView)
        : h(ChatRoomView)
  },
}
