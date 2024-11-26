const Koa = require("koa");

const app = new Koa();

app.use(async (ctx) => {
  if (ctx.path === "/" && ctx.method === "GET") {
    ctx.body = `<h1>Index sayfasına hoşgeldiniz!</h1>`;
  } else if (ctx.path === "/hakkimda" && ctx.method === "GET") {
    ctx.body = `<h1>Hakkımda sayfasına hoşgeldiniz!</h1>`;
  } else if (ctx.path === "/iletisim" && ctx.method === "GET") {
    ctx.body = `<h1>İletişim sayfasına hoşgeldiniz!</h1>`;
  } else {
    ctx.status = 404;
    ctx.body = `<h1>404 - Sayfa Bulunamadı</h1>`;
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor!`);
});
