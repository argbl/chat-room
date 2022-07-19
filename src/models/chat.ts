interface ChatModel {
  id: number
  user_send: number
  user_accept: number
  createtime: Date
  content: string
}

export type { ChatModel }
