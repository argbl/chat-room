// stores/counter.js
import { logout, me } from '@/api/user'
import { UserProps } from '@/model/user'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as UserProps,
    token: window.localStorage.getItem('token') || '',
  }),

  actions: {
    async me() {
      const { data: result } = await me()
      if (result.code === 200) {
        this.user = result.data.user
        console.log(this.user)
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
