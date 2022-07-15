import axios from './axios'

export async function me() {
  return await axios.get('/message/@me')
}
