import { UserProps } from '@/model/user'
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
      uemail: 'email',
      upass: 'password',
    }

    return useValidate(loginForm, rules)
  }

  const doEncrypt = (upass: string) => {
    return encrypt(upass, secretKey)
  }

  const doLogin = async (loginForm: UserProps) => {
    const { data: result } = await login({
      ucrypto: loginForm.ucrypto,
      uemail: loginForm.uemail,
    })

    if (result.code === 200) {
      Message.success(result.message)
      window.localStorage.setItem('token', result.data.token)
      console.log(result.data.token)

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
