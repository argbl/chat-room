import { RoomModel } from '@/models/room'
import axios from './axios'

export async function add(RoomForm: RoomModel) {
  return await axios.post('/room/add', {
    ...RoomForm,
  })
}

export async function list(id: number) {
  return await axios.get(`/room/list?channel_id=${id}`)
}

export async function info(id: number) {
  return await axios.get(`/room/info?id=${id}`)
}

export async function search(title: string) {
  return await axios.get(`/room/search?title=${title}`)
}
