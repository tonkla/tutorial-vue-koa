import { nanoid } from 'nanoid'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import userModel from '../models/user'

const privateKey = 'hello'

export async function findAll() {
  return await userModel.findAll()
}

export async function findOne(userId) {
  return await userModel.findOne({ where: { id: userId } })
}

export async function create(_user) {
  const user = { ..._user, id: nanoid() }
  const password = await bcrypt.hash(_user.password, 10)
  return await userModel.create({ ...user, password })
}

export async function update(user) {
  return await userModel.update(user, { where: { id: user.id } })
}

export async function remove(userId) {
  return await userModel.destroy({ where: { id: userId } })
}

export async function login(_user) {
  const user = await userModel.findOne({ where: { email: _user.email } })
  if (user && (await bcrypt.compare(_user.password, user.password))) {
    const _user = user.toJSON()
    delete _user.password
    const token = jwt.sign({ email: _user.email }, privateKey, { expiresIn: 60 * 60 })
    return { ..._user, token }
  }
  return null
}

export function verify(token) {
  return jwt.verify(token, privateKey)
}

export default {
  findAll,
  findOne,
  create,
  update,
  remove,
  login,
  verify,
}
