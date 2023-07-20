const http = require("http"); // http

const app = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === "/") {
    res.end(`
      <h1>THis is Home Page</h1>
      <a href="/about" > Go About </a> 
    `);
    return
  }
  if (req.url === "/about") {
    res.end(`
      <h1> This is <strong> ABOUT</strong> Page </h1>
      <a href="/" > Go Home </a> 
    `);
    return
  }
  res.end("wrong rout")
});

app.listen(8000, () => {
  console.log(`server is running at... http://localhost:${8000}/`);
});
