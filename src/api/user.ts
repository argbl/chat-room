import axios from './axios'
import { PassModel, UserModel } from '@/models/user'
import { encrypt } from '@/helper/crypto'
import authkey from '@/config/auth-key'
export async function register(registerForm: UserModel) {
  return await axios.post('/user/register', {
    ...registerForm,
  })
}

export async function login(loginForm: UserModel) {
  return await axios.post('/user/login', {
    ...loginForm,
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
  const instance = axios.create({
    withCredentials: false,
  })
  return await instance.post('http://upload-cn-east-2.qiniup.com', form)
}

export async function info(id: number) {
  return await axios.get('/user/info?id=' + id)
}
