import axios from './axios'

export async function list() {
  return await axios.get('/channel/list')
}
