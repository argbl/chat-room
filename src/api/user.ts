import axios from './axios'
import { PassProps, UserProps } from '@/models/user'

export async function register(registerForm: UserProps) {
  return await axios.post('/user/register', registerForm)
}

export async function login(loginForm: UserProps) {
  return await axios.post('/user/login', loginForm)
}

export async function me() {
  return await axios.get('/user/@me')
}

export async function logout() {
  return await axios.post('/user/logout')
}

export async function update(UserForm: UserProps) {
  return await axios.post('/user/update', UserForm)
}

export async function updatePassword(passForm: PassProps) {
  return await axios.post('/user/updatePassword', passForm)
}
