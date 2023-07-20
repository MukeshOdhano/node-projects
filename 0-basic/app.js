const http = require("http");
const fs = require("fs");

http
   .createServer((req, res) => {
      const stream = fs.createReadStream("./content/big-1.txt", "utf-8")
      stream.on("open", () => {
         stream.pipe(res)
      })
      stream.on("error", (err) => {
         res.end(`<pre>${err}</pre>`)
      })
   })

   .listen(3000, () => {
      console.log(`server is runing: localhost:${3000}`)
   })
