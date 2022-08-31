interface UserModel {
  id: number
  nickname?: string
  banner_color?: string
  avatar?: string
  password?: string
  phone?: string
  email?: string
}

interface PassModel {
  originalPassword: string
  newPassword: string
  checkPassword: string
}

export type { UserModel, PassModel }
