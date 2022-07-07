import { UserProps } from '@/model/user'
import { encrypt } from '@/helper/crypto'
import secretKey from '@/config/secret-key'
import { login } from '@/api/user'
import useLoginHistory from './useLoginHistory'
import useValidate from './useValidate'
export default function () {
  const { addHistory } = useLoginHistory()

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
      alert(result.message)
      window.localStorage.setItem('token', result.data.token)
      addHistory({ ...result.data.user, ucrypto: loginForm.ucrypto })
    } else if (result.code === 400) {
      alert(result.message)
    }
  }

  return {
    doValid,
    doEncrypt,
    doLogin,
  }
}
