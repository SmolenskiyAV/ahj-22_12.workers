/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-return-await */
/* eslint-disable consistent-return */

const http = require('http');
const Koa = require('koa');
const slow = require('koa-slow');
const koaBody = require('koa-body');
const path = require('path');

const koaStatic = require('koa-static');

const app = new Koa();
app.use(slow({ // ЗАМЕДЛИТЕЛЬ
  // url: /\.[jpg|jpeg]$/i,
  delay: 4000,
}));

const publicDir = path.join(__dirname, '/public'); // получаем путь до папки "public" в файловой системе сервера

app.use(koaBody({
  urlencoded: true,
  multipart: true, // включим поддержку обработки multipart (приём файлов)
}));

app.use(async (ctx, next) => { // обработка CORS POLICY
  const origin = ctx.request.get('Origin');
  if (!origin) {
    return await next();
  }
  const headers = { 'Access-Control-Allow-Origin': '*' }; // разрешаем доступ к серверу со всех доменов(адресов)
  if (ctx.request.method !== 'OPTIONS') {
    ctx.response.set({ ...headers });
    try {
      return await next();
    } catch (e) {
      e.headers = { ...e.headers, ...headers };
      throw e;
    }
  }
  if (ctx.request.get('Access-Control-Request-Method')) {
    ctx.response.set({
      ...headers,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    });
    if (ctx.request.get('Access-Control-Request-Headers')) {
      ctx.response.set('Access-Control-Allow-Headers', ctx.request.get('Access-Control-Allow-Request-Headers'));
    }
    ctx.response.status = 204; // No content
  }
});

app.use(koaStatic(publicDir));

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback()).listen(port);
