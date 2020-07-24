import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'

import postRouter from './routers/post'
import userRouter from './routers/user'
import userService from './services/user'

const app = new Koa()

async function authorize(ctx, next) {
  const isPublic = ctx.path === '/login' || ctx.path === '/register'
  if (isPublic) return await next()
  else {
    const { authorization: token } = ctx.headers
    if (token && userService.verify(token)) return await next()
    ctx.status = 401
  }
}

const port = 8081

app
  .use(cors())
  .use(bodyParser())
  .use(authorize)
  .use(postRouter.routes())
  .use(userRouter.routes())
  .listen({ port }, async () => console.log(`🚀 API launched on port ${port}`))
