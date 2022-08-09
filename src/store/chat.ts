// stores/counter.js
import Message from '@cp/base/base-message'
import { UserModel } from '@model/user'
import { ChatModel } from '@model/chat'
import { defineStore } from 'pinia'
import { info } from '@/api/user'
import { history } from '@/api/chat'

export const useChatStore = defineStore('chat', {
  state: () => ({
    user_chat: JSON.parse(
      window.sessionStorage.getItem('chat_user') || '{}'
    ) as UserModel,
    chatHistory: [] as Array<ChatModel>,
    page: {
      num: 0,
      size: 10,
    },
  }),

  actions: {
    initPage() {
      this.page.num = 0
    },

    increasePage() {
      this.page.num++
      return true
    },

    async init(id: number) {
      this.initPage()
      const { data: result } = await info(id)
      if (result.code === 200) {
        this.user_chat = result.data
        window.sessionStorage.setItem(
          'chat_user',
          JSON.stringify(this.user_chat)
        )
      } else if (result.code === 403) {
        Message.error(result.message)
      }
    },

    async history(id: number) {
      const { data: result } = await history(id, this.page.num, this.page.size)
      if (result.code === 200 && result.data.length) {
        if (this.page.num === 0) {
          this.chatHistory = result.data.reverse()
        } else {
          this.chatHistory = [...result.data.reverse(), ...this.chatHistory]
        }
      } else if (result.code === 200 && !result.data.length) {
        if (this.page.num === 0) {
          Message.error('暂无聊天记录')
        } else {
          Message.error('加载完毕')
        }
      } else if (result.code === 403) {
        Message.error(result.message)
      }
      return true
    },
  },
})
