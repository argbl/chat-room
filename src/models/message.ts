import { UserModel } from './user'

interface MessageModel {
  id: number
  user_send: number
  user_accept: number
  status: number
  type: number
  createtime: Date
  content: string
  avatar: string
  nickname: string
  message_sender: UserModel
  message_accept: UserModel
}

export type { MessageModel }
