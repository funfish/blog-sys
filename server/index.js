const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const Home = require('./controller/home');


const fetch = require('isomorphic-unfetch');
const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;

app.prepare()
  .then(() => {
    const server = new Koa();
    const router = new Router();

    // 首页
    router.get('/', async (ctx, next) => {
      const data = await Home.indexList(ctx, next);
      if (data && data.code === 200) {
        await app.render(ctx.req, ctx.res, '/Index/Index', data);
      } else {
        await app.render(ctx.req, ctx.res, '/_error', data);        
      }
      ctx.respond = false;
    });
    router.get('/api/post/getPostList', async ctx => {
      const data = await Home.indexList(ctx, next);
      ctx.body = data;
    });

    router.get('/post/:title', async (ctx, next) => {
      const data = await Home.postContent(ctx, next);
      if (data && data.code === 200) {
        await app.render(ctx.req, ctx.res, '/Post/Post', data);
      } else {
        await app.render(ctx.req, ctx.res, '/_error', data);
      }
      ctx.respond = false;
    });

    router.get('/api/post/getPost/:title', async (ctx, next) => {
      const data = await Home.postContent(ctx, next);
      ctx.body = data;
    });

    // 静态资源
    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    })
    // 防止响应报错
    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200;
      await next();
    })
    server.use(router.routes());
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    })
  })