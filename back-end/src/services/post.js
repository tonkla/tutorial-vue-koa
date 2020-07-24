import { nanoid } from 'nanoid'

import postModel from '../models/post'

export async function findAll() {
  return await postModel.findAll()
}

export async function findOne(postId) {
  return await postModel.findOne({ where: { id: postId } })
}

export async function create(post) {
  return await postModel.create({ ...post, id: nanoid() })
}

export async function update(post) {
  return await postModel.update(post, { where: { id: post.id } })
}

export async function remove(postId) {
  return await postModel.destroy({ where: { id: postId } })
}

export default {
  findAll,
  findOne,
  create,
  update,
  remove,
}
