import axios from './axios'
import { PassProps, UserProps } from '@/models/user'
import { encrypt } from '@/helper/crypto'
import secretKey from '@/config/secret-key'
export async function register(registerForm: UserProps) {
  return await axios.post('/user/register', {
    ...registerForm,
    password: encrypt(registerForm.password!, secretKey),
  })
}

export async function login(loginForm: UserProps) {
  return await axios.post('/user/login', {
    ...loginForm,
    password: encrypt(loginForm.password!, secretKey),
  })
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

export async function changePassword(passForm: PassProps) {
  const encryptPassForm: PassProps = {
    originalPassword: '',
    newPassword: '',
    checkPassword: '',
  }
  for (const key in passForm) {
    encryptPassForm[key] = encrypt(passForm[key], secretKey)
  }
  return await axios.post('/user/changePass', encryptPassForm)
}
