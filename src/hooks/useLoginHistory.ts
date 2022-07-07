import { UserProps } from '@/model/user'

export default function () {
  const key = 'login_history'

  const loginHistory = window.localStorage.getItem(key)
    ? (JSON.parse(window.localStorage.getItem(key)!) as Array<UserProps>)
    : []

  const addHistory = (loginForm: UserProps) => {
    for (let i = 0; i < loginHistory.length; i++) {
      if (loginHistory[i].uemail === loginForm.uemail) {
        loginHistory[i] = loginForm
        return
      }
    }
    if (loginHistory.length >= 3) {
      loginHistory.shift()
    }
    loginHistory.push(loginForm)

    window.localStorage.setItem(key, JSON.stringify(loginHistory))
  }

  const delHistory = (loginForm: UserProps) => {
    const history: UserProps[] = loginHistory.filter((item: UserProps) => {
      if (loginForm.uemail !== item.uemail) {
        return item
      }
    })
    window.localStorage.setItem(key, JSON.stringify(history))
  }

  const getHistory = (loginForm: UserProps) => {
    for (let i = 0; i < loginHistory.length; i++) {
      if (loginHistory[i].uemail === loginForm.uemail) {
        return loginHistory[i]
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
