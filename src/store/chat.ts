// stores/counter.js
import Message from '@cp/base/base-message'
import { UserModel } from '@model/user'
import { ChatModel } from '@model/chat'
import { defineStore } from 'pinia'
import { info } from '@/api/user'
import { history } from '@/api/chat'

export const useChatStore = defineStore('RECORD_PINIA_CHAT', {
  state: () => ({
    user_chat: {} as UserModel,
    userList: [] as Array<UserModel>,
    chatHistory: [] as Array<ChatModel>,
    page: {
      num: 0,
      size: 10,
    },
  }),

  actions: {
    async init(id: number) {
      this.page.num = 0
      const { data: result } = await info(id)
      if (result.code === 200) {
        this.user_chat = result.data
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

    async letter(user: UserModel) {
      const result = this.userList.filter((item) => {
        return item.id !== user.id
      })
      result.push(user)
      this.userList = result
    },
  },
  persist: true,
})
