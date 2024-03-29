const fs = require('fs');

const koa = require('koa');
const mount = require('koa-mount');
const static = require('koa-static');

const app = new koa();

app.use(
  static(__dirname + '/source/')
)

app.use(
  mount('/', async (ctx) => {
    ctx.body = fs.readFileSync(__dirname + '/source/index.htm', 'utf-8')
  })
)

// app.listen(3000);
module.exports = app;
