import axios from 'axios'

const apiUrl = 'http://localhost:8081'

export async function hello() {
  const { data } = await axios.get(`${apiUrl}`)
}

export async function getPosts() {
  const { data } = await axios.get(`${apiUrl}/posts`)
  return Array.isArray(data) ? data : []
}

export default {
  hello,
  getPosts,
}
