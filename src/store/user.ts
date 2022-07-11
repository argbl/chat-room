// stores/counter.js
import { logout, me } from '@/api/user'
import Message from '@/components/base-message'
import { UserProps } from '@/models/user'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(window.localStorage.getItem('user') || '{}') as UserProps,
    token: window.localStorage.getItem('token') || '',
  }),

  actions: {
    async me() {
      const { data: result } = await me()
      if (result.code === 200) {
        window.localStorage.setItem('user', JSON.stringify(result.data.user))
        this.user = result.data.user
      } else if (result.code === 403) {
        Message.error(result.message)
      }
    },
    async logout() {
      const { data: result } = await logout()
      if (result.code === 200) {
        this.user = {}
        window.localStorage.removeItem('token')
      }
    },
  },
})
