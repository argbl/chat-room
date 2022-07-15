// stores/counter.js
import { me } from '@/api/message'
import Message from '@/components/base-message'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  state: () => ({
    messageList: JSON.parse(window.localStorage.getItem('messageList') || '{}'),
  }),

  actions: {
    async me() {
      const { data: result } = await me()
      if (result.code === 200) {
        this.messageList = result.data
        window.localStorage.setItem(
          'messageList',
          JSON.stringify(this.messageList)
        )
      } else {
        Message.error(result.message)
      }
    },
  },
})
