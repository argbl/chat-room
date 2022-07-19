// stores/counter.js
import Message from '@cp/base/base-message'
import { UserModel } from '@/models/user'
import { defineStore } from 'pinia'
import useLoginHistory from '@/hooks/useLoginHistory'
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
        console.log(result.data)

        // const chat = result.data.chat
        // window.localStorage.setItem('chat', JSON.stringify(chat))
        // updateHistory(chat)
        // this.user = chat
      } else if (result.code === 403) {
        Message.error(result.message)
      }
    },
  },
})
