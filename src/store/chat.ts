// stores/counter.js
import Message from '@cp/base/base-message'
import { UserModel } from '@/models/user'
import { defineStore } from 'pinia'
import { info } from '@/api/user'

export const useChatStore = defineStore('chat', {
  state: () => ({
    user: JSON.parse(
      window.sessionStorage.getItem('chat_user') || '{}'
    ) as UserModel,
    chatHistory: {},
  }),

  actions: {
    async info(id: number) {
      const { data: result } = await info(id)
      if (result.code === 200) {
        this.user = result.data
        window.sessionStorage.setItem('chat_user', JSON.stringify(this.user))
      } else if (result.code === 403) {
        Message.error(result.message)
      }
    },
  },
})
