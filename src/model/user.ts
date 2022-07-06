interface UserProps {
  uname: string
  upass: string
  uphone: string
  uemail: string
}

interface RegisterProps {
  uname: string
  upass?: string
  uemail: string
  ucrypto?: string
}

export type { UserProps, RegisterProps }
