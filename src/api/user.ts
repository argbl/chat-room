import axios from './axios'
import { PassModel, UserModel } from '@/models/user'
import { encrypt } from '@/helper/crypto'
import authkey from '@/config/auth-key'
export async function register(registerForm: UserModel) {
  return await axios.post('/user/register', {
    ...registerForm,
    password: encrypt(registerForm.password!, authkey),
  })
}

export async function login(loginForm: UserModel) {
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

export async function update(UserForm: UserModel) {
  return await axios.post('/user/update', UserForm)
}

export async function pass(passForm: PassModel) {
  const encryptPassForm: PassModel = {
    originalPassword: '',
    newPassword: '',
    checkPassword: '',
  }
  for (const key in passForm) {
    encryptPassForm[key] = encrypt(passForm[key], authkey)
  }
  return await axios.post('/user/pass', encryptPassForm)
}

export async function avatar() {
  return await axios.get('/user/avatar')
}

export async function uploadImage(form: FormData) {
  return await axios.post('http://upload-cn-east-2.qiniup.com', form)
}
