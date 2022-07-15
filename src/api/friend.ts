import { UserModel } from '@/models/user'
import axios from 'axios'
export async function add(UserForm: UserModel) {
  return await axios.post('/friend/add', { ...UserForm })
}
