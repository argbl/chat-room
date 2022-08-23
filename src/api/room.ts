import { RoomModel } from '@/models/room'
import axios from './axios'

export async function add(RoomForm: RoomModel) {
  return await axios.post('/room/add', {
    ...RoomForm,
  })
}

export async function list(id: number) {
  return await axios.get(`/room/list?id=${id}`)
}
