import axios from './axios'

export async function avatar() {
  return await axios.get('/common/avatar')
}

export async function uploadImage(form: FormData) {
  const instance = axios.create({
    withCredentials: false,
  })
  return await instance.post('http://upload-cn-east-2.qiniup.com', form)
}
