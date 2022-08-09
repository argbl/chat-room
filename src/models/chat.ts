import { UserModel } from './user'

interface ChatModel {
  id?: number
  user_send?: number
  user_accept?: number
  createtime?: Date
  content?: string
  nickname?: string
  avatar?: string
  chat_sender?: UserModel
  chat_accepter?: UserModel
}

export type { ChatModel }
