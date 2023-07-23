const express = require("express");
const logger = require("./logger")
const auth = require("./authorize")

const app = express();

// setup static file

app.use([logger, auth])
app.get("/", (req, res) => {
   res.status(200).sendFile(path.resolve(__dirname, "./components/home.html"));
});

// multilple middleware start -->
// request ==> middleware ==> response
app.get("/about", (req, res) => {
   
});

// <-- end multiple middleware


// 404 response
app.all("*", (req, res) => {
   // chain method
   res.status(404).sendFile(path.resolve(__dirname, "./components/error.html"));
});

app.listen(3000, () => {
   console.log(`server is running at localhost:${3000}`);
});

