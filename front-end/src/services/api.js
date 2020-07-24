import axios from 'axios'

const apiUrl = 'http://localhost:8081'

function client(token) {
  return axios.create({ headers: { authorization: token } })
}

export async function hello() {
  await axios.get(`${apiUrl}`)
}

export async function register(user) {
  const { data } = await axios.post(`${apiUrl}/register`, user)
  return data ? data : null
}

export async function login(user) {
  try {
    const { data } = await axios.post(`${apiUrl}/login`, user)
    return data ? data : null
  } catch (e) {
    return null
  }
}

export async function getPosts(token) {
  const { data } = await client(token).get(`${apiUrl}/posts`)
  return Array.isArray(data) ? data : []
}

export async function createPost(token, post) {
  const { data } = await client(token).post(`${apiUrl}/posts`, post)
  return data ? data : null
}

export async function updatePost(token, post) {
  const { data } = await client(token).put(`${apiUrl}/posts`, post)
  return data ? data : null
}

export async function deletePost(token, post) {
  const { status } = await client(token).delete(`${apiUrl}/posts/${post.id}`)
  return status === 200
}

export default {
  hello,
  register,
  login,
  getPosts,
  createPost,
  updatePost,
  deletePost,
}
