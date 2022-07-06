import axios from './axios'
import { RegisterProps } from '@type/user'
export async function register(registerInfo: RegisterProps) {
  return await axios.post('/user/register', registerInfo)
}
