import { MessageModel } from '@/models/message'
import axios from './axios'

export async function me() {
  return await axios.get('/message/@me')
}

export async function resolve(message: MessageModel, status: number) {
  return await axios.post('/message/resolve', {
    ...message,
    status,
  })
}
