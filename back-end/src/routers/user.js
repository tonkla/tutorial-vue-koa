import Router from '@koa/router'

import userService from '../services/user'

const router = new Router()

router.post('/register', async (ctx) => {
  const user = await userService.create(ctx.request.body)
  if (user) {
    const _user = user.toJSON()
    delete _user.password
    return (ctx.body = _user)
  }
  ctx.status = 500
})

router.post('/login', async (ctx) => {
  const user = await userService.login(ctx.request.body)
  if (user) return (ctx.body = user)
  ctx.status = 401
})

export default router
