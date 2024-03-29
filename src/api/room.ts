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

export async function search(title: string, channel_id: number) {
  return await axios.get(`/room/search?title=${title}&channel_id=${channel_id}`)
}

export async function isjoin(id: number) {
  return await axios.get(`/room/isjoin?room_id=${id}`)
}

export async function join(room_id: number, status: number) {
  return await axios.post('/room/join', {
    room_id,
    status,
  })
}

export async function member(id: number) {
  return await axios.get(`/room/member?id=${id}`)
}

export async function history(room_id: number, pageNum = 0, pageSize = 10) {
  return await axios.get(
    `/room/history?room_id=${room_id}&pageNum=${pageNum}&pageSize=${pageSize}`
  )
}

export async function joins(user_id: number) {
  return await axios.get(`/room/joins?user_id=${user_id}`)
}
