import axios from './axios'
import { PassProps, UserProps } from '@/models/user'
import { encrypt } from '@/helper/crypto'
import authkey from '@/config/auth-key'
export async function register(registerForm: UserProps) {
  return await axios.post('/user/register', {
    ...registerForm,
    password: encrypt(registerForm.password!, authkey),
  })
}

export async function login(loginForm: UserProps) {
  return await axios.post('/user/login', {
    ...loginForm,
    password: encrypt(loginForm.password!, authkey),
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
    encryptPassForm[key] = encrypt(passForm[key], authkey)
  }
  return await axios.post('/user/changePass', encryptPassForm)
}

export async function preUpload() {
  return await axios.get('/user/preUpload')
}

export async function uploadImage(form: FormData) {
  return await axios.post('http://upload-cn-east-2.qiniup.com', form)
}
