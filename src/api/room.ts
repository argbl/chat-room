import { RoomModel } from '@/models/room'
import axios from './axios'

export async function add(RoomForm: RoomModel) {
  return await axios.post('/room/add', {
    ...RoomForm,
  })
}
