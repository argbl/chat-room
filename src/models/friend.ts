interface FriendModel {
  id: number
  user_send: number
  user_accept: number
  uid: number
  avatar: string
  nickname: string
  status: StatusType
  online: OnLineType
}

enum StatusType {
  UNHANDLE = 0,
  RESOLVE = 1,
  REJECT = 2,
}

enum OnLineType {
  ONLINE = 1,
  OFFLINE = 0,
}

export { StatusType, OnLineType }

export type { FriendModel }
