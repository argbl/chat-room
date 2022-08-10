// stores/counter.js
import { me } from '@/api/friend'
import { FriendModel, OnLineType, StatusType } from '@/models/friend'
import { storeToRefs, defineStore } from 'pinia'
import { useUserStore } from './user'
export const useFriendStore = defineStore('RECORD_PINIA_FRIEND', {
  state: () => ({
    friendActiveIndex: 0,
    friendList: [] as Array<FriendModel>,
  }),

  getters: {
    computedFriendList: (state) => {
      const { user } = storeToRefs(useUserStore())
      switch (state.friendActiveIndex) {
        case 0:
          return state.friendList.filter((friend: FriendModel) => {
            return (
              friend.status === StatusType.RESOLVE &&
              friend.online === OnLineType.ONLINE
            )
          })
        case 1:
          return state.friendList.filter((friend: FriendModel) => {
            return friend.status === StatusType.RESOLVE
          })
        case 2:
          return state.friendList.filter((friend: FriendModel) => {
            return (
              friend.user_accept === user.value.id &&
              friend.status === StatusType.UNHANDLE
            )
          })
      }
    },
  },

  actions: {
    async me() {
      const { data: result } = await me()
      if (result.code === 200) {
        this.friendList = result.data
      }
    },
    setFriendActiveIndex(index: number) {
      this.friendActiveIndex = index
    },
  },
  persist: true,
})
