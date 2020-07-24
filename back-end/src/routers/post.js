import Router from '@koa/router'

import postService from '../services/post'

const router = new Router()

router.get('/posts', async (ctx) => {
  const posts = await postService.findAll()
  ctx.body = Array.isArray(posts) ? posts : []
})

router.post('/posts', async (ctx) => {
  const post = ctx.request.body
  const _post = await postService.create(post)
  if (_post) return (ctx.body = _post)
  ctx.status = 500
})

router.put('/posts', async (ctx) => {
  const post = ctx.request.body
  const rows = await postService.update(post)
  if (rows[0] === 1) {
    const _post = await postService.findOne(post.id)
    return (ctx.body = _post)
  }
  ctx.status = 500
})

router.delete('/posts/:id', async (ctx) => {
  const { id } = ctx.params
  const rows = await postService.remove(id)
  if (rows === 1) return (ctx.status = 200)
  ctx.status = 500
})

export default router
