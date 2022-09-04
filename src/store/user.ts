// stores/counter.js
import { logout, me } from '@/api/user'
import Message from '@cp/base/base-message'
import { UserModel } from '@/models/user'
import { defineStore } from 'pinia'
import useLoginHistory from '@/hooks/useLoginHistory'

const { updateHistory } = useLoginHistory()
export const useUserStore = defineStore('RECORD_PINIA_USER', {
  state: () => ({
    user: {} as UserModel,
  }),

  actions: {
    async me() {
      const { data: result } = await me()
      if (result.code === 200) {
        const user = result.data.user
        updateHistory(user)
        this.user = user
      } else if (result.code === 403) {
        Message.error(result.message)
      }
    },
    async logout() {
      window.localStorage.removeItem('RECORD_PINIA_CHAT')
      window.localStorage.removeItem('RECORD_PINIA_MESSAGE')
      window.localStorage.removeItem('RECORD_PINIA_SETTING')
      window.localStorage.removeItem('RECORD_PINIA_FRIEND')
      window.localStorage.removeItem('RECORD_PINIA_USER')
      await logout()
    },
  },
  persist: true,
})
