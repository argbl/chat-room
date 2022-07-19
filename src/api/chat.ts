import axios from './axios'
export async function history(id: number) {
  return await axios.get('/chat/history?id=' + id)
}
