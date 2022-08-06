import { UserModel } from '@/models/user'
import { login } from '@/api/user'
import useLoginHistory from './useLoginHistory'
import useValidate from './useValidate'
import { useRouter } from 'vue-router'
import Message from '@cp/base/base-message'
import { useUserStore } from '@/store/user'
export default function () {
  const { addHistory } = useLoginHistory()
  const router = useRouter()
  const store = useUserStore()

  const doValid = (loginForm: UserModel) => {
    const rules = {
      email: 'email',
      password: 'password',
    }

    return useValidate(loginForm, rules)
  }

  const doLogin = async (loginForm: UserModel) => {
    const { data: result } = await login(loginForm)
    console.log('前端打印登录信息', result)

    if (result.code === 200) {
      Message.success(result.message)
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
