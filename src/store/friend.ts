// stores/counter.js
import { me } from '@/api/friend'
import { FriendModel, OnLineType, StatusType } from '@/models/friend'
import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useFriendStore = defineStore('friend', {
  state: () => ({
    friendActiveIndex: 0,
    friendList: JSON.parse(
      window.sessionStorage.getItem('friendList') || '[]'
    ) as Array<FriendModel>,
  }),

  getters: {
    computedFriendList: (state) => {
      const userStore = useUserStore()
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
              friend.user_accept === userStore.user.id &&
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
        window.sessionStorage.setItem(
          'friendList',
          JSON.stringify(this.friendList)
        )
      }
    },
    setFriendActiveIndex(index: number) {
      this.friendActiveIndex = index
    },
  },
})
