import { UserProps } from '@/models/user'
import { login } from '@/api/user'
import useLoginHistory from './useLoginHistory'
import useValidate from './useValidate'
import { useRouter } from 'vue-router'
import Message from '@/components/base-message'
import { useUserStore } from '@/store/user'
export default function () {
  const { addHistory } = useLoginHistory()
  const router = useRouter()
  const store = useUserStore()

  const doValid = (loginForm: UserProps) => {
    const rules = {
      email: 'email',
      password: 'password',
    }

    return useValidate(loginForm, rules)
  }

  const doLogin = async (loginForm: UserProps) => {
    const { data: result } = await login(loginForm)

    if (result.code === 200) {
      Message.success(result.message)
      window.localStorage.setItem('token', result.data.token)
      await store.me()
      addHistory({ ...result.data.user, password: loginForm.password })
      router.push({
        path: '/',
      })
    } else if (result.code === 400) {
      Message.error(result.message)
    }
  }

  return {
    doValid,
    doLogin,
  }
}
