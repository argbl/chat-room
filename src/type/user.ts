interface UserProps {
  uname: string
  upass: string
  uphone: string
  uemail: string
}

type RegisterProps = Omit<UserProps, 'uphone'>

export type { UserProps, RegisterProps }
