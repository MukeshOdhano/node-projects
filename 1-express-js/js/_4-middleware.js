const express = require("express");
// const logger = require("../logger")
// for exportign logger function
// but you don't have to because you alreadu have logger function
// in this js file

const app = express();

app.get("/", (req, res) => {
});

// middleware start -->
const logger = (req, res, next) => {
   const method = req.method;
   const url = req.url;
   const date = new Date().getFullYear();

   console.log({ method, url, date });

   next();
};

// request ==> middleware ==> response
app.get("/", logger, (req, res) => {
   
});

app.get("/about", logger, (req, res) => {
   res.status(200).send("hello");
});

// <-- end middleware

// for importign logger
// uncomment bellow

// app.use("/", logger) // <-- this will invoke in any route
// app.get("/", (req, res) => {
//    
// });

// // middleware start -->

// // request ==> middleware ==> response
// app.get("/about", (req, res) => {
//    res.status(200).send("hello");
// });

// uncomment above
