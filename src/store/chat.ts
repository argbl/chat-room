// stores/counter.js
import Message from '@cp/base/base-message'
import { UserModel } from '@model/user'
import { ChatModel } from '@model/chat'
import { defineStore } from 'pinia'
import { info } from '@/api/user'
import { history } from '@/api/chat'

export const useChatStore = defineStore('chat', {
  state: () => ({
    user: JSON.parse(
      window.sessionStorage.getItem('chat_user') || '{}'
    ) as UserModel,
    chatHistory: [] as Array<ChatModel>,
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

    async history(id: number, pageNum: number, pageSize: number) {
      const { data: result } = await history(id, pageNum, pageSize)
      if (result.code === 200 && result.data.length) {
        this.chatHistory = [...result.data.reverse(), ...this.chatHistory]
      } else if (result.code === 200 && !result.data.length) {
        Message.error('加载完毕')
      } else if (result.code === 403) {
        Message.error(result.message)
      }
    },
  },
})
