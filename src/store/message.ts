// stores/counter.js
import { me } from '@/api/message'
import { MessageModel } from '@/models/message'
import Message from '@cp/base/base-message'
import { defineStore } from 'pinia'

export const useMessageStore = defineStore('RECORD_PINIA_MESSAGE', {
  state: () => ({
    messageList: [] as Array<MessageModel>,
  }),

  actions: {
    async me() {
      const { data: result } = await me()
      if (result.code === 200) {
        this.messageList = result.data
      } else {
        Message.error(result.message)
      }
    },
  },
  persist: true,
})
