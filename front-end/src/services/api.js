import axios from 'axios'

const apiUrl = 'http://localhost:8081'

export async function hello() {
  await axios.get(`${apiUrl}`)
}

export async function getPosts() {
  const { data } = await axios.get(`${apiUrl}/posts`)
  return Array.isArray(data) ? data : []
}

export async function createPost(post) {
  const { data } = await axios.post(`${apiUrl}/posts`, post)
  return data ? data : null
}

export async function updatePost(post) {
  const { data } = await axios.put(`${apiUrl}/posts`, post)
  return data ? data : null
}

export async function deletePost(post) {
  const { status } = await axios.delete(`${apiUrl}/posts/${post.id}`)
  return status === 200
}

export default {
  hello,
  getPosts,
  createPost,
  updatePost,
  deletePost,
}
