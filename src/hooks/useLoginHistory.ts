import { UserProps } from '@/models/user'
import { useStorage } from '@vueuse/core'
import { Ref, watch } from 'vue'

export default function () {
  const key = 'login_history'

  const loginHistory: Ref<UserProps[]> = useStorage(key, [])

  const addHistory = (loginForm: UserProps) => {
    for (let i = 0; i < loginHistory.value.length; i++) {
      if (loginHistory.value[i].email === loginForm.email) {
        loginHistory.value[i] = loginForm
        return
      }
    }
    if (loginHistory.value.length >= 3) {
      loginHistory.value.shift()
    }
    loginHistory.value.push(loginForm)
  }

  const delHistory = (loginForm: UserProps) => {
    for (let i = 0; i < loginHistory.value.length; i++) {
      if (loginHistory.value[i].email === loginForm.email) {
        loginHistory.value.splice(i, 1)
      }
    }
  }

  const getHistory = (loginForm: UserProps) => {
    for (let i = 0; i < loginHistory.value.length; i++) {
      if (loginHistory.value[i].email === loginForm.email) {
        return loginHistory.value[i]
      }
    }
  }

  return {
    loginHistory,
    getHistory,
    addHistory,
    delHistory,
  }
}
