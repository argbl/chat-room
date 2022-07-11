import { UserProps } from '@/models/user'
import { encrypt } from '@/helper/crypto'
import secretKey from '@/config/secret-key'
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

  const doEncrypt = (password: string) => {
    return encrypt(password, secretKey)
  }

  const doLogin = async (loginForm: UserProps) => {
    console.log(loginForm)

    const { data: result } = await login({
      ucrypto: loginForm.ucrypto,
      email: loginForm.email,
    })

    if (result.code === 200) {
      Message.success(result.message)
      window.localStorage.setItem('token', result.data.token)
      await store.me()
      addHistory({ ...result.data.user, ucrypto: loginForm.ucrypto })
      router.push({
        path: '/',
      })
    } else if (result.code === 400) {
      Message.error(result.message)
    }
  }

  return {
    doValid,
    doEncrypt,
    doLogin,
  }
}
