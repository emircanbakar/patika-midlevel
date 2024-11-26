const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  res.writeHead(200, { "Content-Type": "text/html" });
  if (url === "/") {
    res.write("index sayfasina hosgeldiniz");
  } else if (url === "/hakkinda") {
    res.write("hakkında sayfasina hosgeldiniz");
  } else if (url === "/iletisim") {
    res.write("iletisim sayfasina hosgeldiniz");
  }
  res.end();
});

const port = 5001;
server.listen(port, () => {
  console.log("server port 5000");
});
