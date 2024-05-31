import fs from "fs"
import { createServer } from "http"

// Here we are reading a file using fs module
const readingFiles = (filePath) => {
  return fs.readFileSync(filePath)
}

// Also we can create a http server and send the file using this
createServer((_, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const page = readingFiles("./page.html")
  res.write(page)
  res.end()
}).listen(3000)