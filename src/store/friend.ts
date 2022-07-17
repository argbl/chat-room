// stores/counter.js
import { me } from '@/api/friend'
import { FriendModel, OnLineType, StatusType } from '@/models/friend'
import { defineStore } from 'pinia'

export const useFriendStore = defineStore('friend', {
  state: () => ({
    friendActiveIndex: 0,
    friendList: JSON.parse(
      window.localStorage.getItem('friendList') || '[]'
    ) as Array<FriendModel>,
  }),

  getters: {
    computedFriendList: (state) => {
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
            return friend.status === StatusType.UNHANDLE
          })
        case 3:
          return state.friendList.filter((friend: FriendModel) => {
            return friend.status === StatusType.REJECT
          })
      }
    },
  },

  actions: {
    async me() {
      const { data: result } = await me()
      if (result.code === 200) {
        this.friendList = result.data

        window.localStorage.setItem(
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
