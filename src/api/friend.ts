import { UserProps } from '@/models/user'
import axios from 'axios'
export async function add(UserForm: UserProps) {
  return await axios.post('/friend/add', { ...UserForm })
}
