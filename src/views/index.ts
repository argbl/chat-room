import { h, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import FriendsView from './friend/index.vue'
import ExploreView from './explore/index.vue'
import ChatRoomView from './chat-room/index.vue'
import InBox from '@/components/in-box/index.vue'
import JoinRoom from '@/views/chat-room/join-room/index.vue'
import { isjoin } from '@/api/room'
import { useChatStore } from '@/store/chat'
export default {
  setup() {
    const route = useRoute()
    const { init } = useChatStore()
    const useJoin = () => {
      const join = ref(false)
      const handleJoin = async (room_id: number) => {
        const { data: result } = await isjoin(room_id)
        join.value = result.data
      }
      return { join, handleJoin }
    }
    const { join, handleJoin } = useJoin()

    watch(
      route,
      async (newValue) => {
        if (route.name === 'Chat') {
          init(Number(newValue.params.id))
        } else {
          handleJoin(Number(newValue.params.id))
        }
      },
      { deep: true, immediate: true }
    )
    return () =>
      route.name === 'Home'
        ? h(FriendsView, null, {
            default: () => h(InBox),
          })
        : route.name === 'Chat'
        ? h(ChatRoomView, null, {
            inbox: () => h(InBox),
          })
        : route.name === 'Explore'
        ? h(ExploreView)
        : h(ChatRoomView, null, {
            join: () => h(JoinRoom, { active: join.value, joinCb: handleJoin }),
            inbox: () => h(InBox),
          })
  },
}
