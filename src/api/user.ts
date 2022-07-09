import axios from './axios'
import { UserProps } from '@/model/user'

export async function register(registerForm: UserProps) {
  return await axios.post('/user/register', registerForm)
}

export async function login(loginForm: UserProps) {
  return await axios.post('/user/login', loginForm)
}

export async function me() {
  return await axios.get('/user/@me')
}
