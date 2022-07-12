import { UserProps } from '@/models/user'
import { useStorage } from '@vueuse/core'
import { Ref } from 'vue'

export default function () {
  const key = 'login_history'

  const loginHistory: Ref<UserProps[]> = useStorage(key, [])

  const addHistory = (loginForm: UserProps) => {
    const result = updateHistory(loginForm)
    if (!result) {
      if (loginHistory.value.length >= 3) {
        loginHistory.value.shift()
      }
      loginHistory.value.push(loginForm)
    }
  }

  const delHistory = (loginForm: UserProps) => {
    for (let i = 0; i < loginHistory.value.length; i++) {
      if (loginHistory.value[i].id === loginForm.id) {
        loginHistory.value.splice(i, 1)
      }
    }
  }

  const getHistory = (loginForm: UserProps) => {
    for (let i = 0; i < loginHistory.value.length; i++) {
      if (loginHistory.value[i].id === loginForm.id) {
        return loginHistory.value[i]
      }
    }
  }

  const updateHistory = (loginForm: UserProps) => {
    for (let i = 0; i < loginHistory.value.length; i++) {
      if (loginHistory.value[i].id === loginForm.id) {
        loginHistory.value[i] = loginForm
        return true
      }
    }
  }

  return {
    loginHistory,
    getHistory,
    addHistory,
    delHistory,
    updateHistory,
  }
}
