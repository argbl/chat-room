import axios from './axios'
import { RegisterProps, LoginProps } from '@/model/user'

export async function register(registerForm: RegisterProps) {
  return await axios.post('/user/register', registerForm)
}

export async function login(loginForm: LoginProps) {
  return await axios.post('/user/login', loginForm)
}
