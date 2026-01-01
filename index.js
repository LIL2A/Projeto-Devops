const http = require("http");
const port = 80;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World do DevOps! 🚀");
});

server.listen(port, () => {
 console.log(`Servidor rodando na porta ${port}`);
});
