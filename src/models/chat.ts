interface ChatModel {
  id?: number
  user_send?: number
  user_accept?: number
  createtime?: Date
  content?: string
  nickname?: string
  avatar?: string
}

export type { ChatModel }
