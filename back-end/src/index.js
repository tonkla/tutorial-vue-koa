import Koa from 'koa'
import cors from '@koa/cors'
import Router from '@koa/router'

const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
  ctx.body = 'Hello'
})

router.get('/posts', (ctx) => {
  ctx.body = [
    { id: '1', body: 'AAA' },
    { id: '2', body: 'BBB' },
  ]
})

const port = 8081

app
  .use(cors())
  .use(router.routes())
  .listen({ port }, async () => console.log(`🚀 API launched on port ${port}`))
