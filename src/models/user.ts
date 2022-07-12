interface UserProps {
  id?: number
  nickname?: string
  banner_color?: string
  avatar?: string
  password?: string
  phone?: string
  email?: string
}

interface PassProps {
  originalPassword: string
  newPassword: string
  checkPassword: string
}

export type { UserProps, PassProps }
