const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("index page");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("about page");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("contact page");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("404 not found");
  }
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server çalısıyor port ${port}`);
});
