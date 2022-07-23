import axios from './axios'
export async function history(id: number, pageNum = 0, pageSize = 10) {
  return await axios.get(
    `/chat/history?id=${id}&pageNum=${pageNum}&pageSize=${pageSize}`
  )
}
