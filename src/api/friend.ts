import { FriendModel } from '@/models/friend'
import { UserModel } from '@/models/user'
import axios from './axios'

export async function me() {
  return await axios.get('/friend/@me')
}
export async function add(UserForm: UserModel) {
  return await axios.post('/friend/add', { ...UserForm })
}

export async function update(FriendForm: FriendModel) {
  return await axios.post('/friend/update', { ...FriendForm })
}
