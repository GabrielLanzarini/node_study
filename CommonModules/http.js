import http from "http"

// Using http module to create a endpoint to send a json response
http.createServer((_, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json', })
  const jsonObj = { name: "Gabriel" }
  res.write(JSON.stringify(jsonObj))
  res.end()
}).listen(3000)