const { connectionDB } = require("./db/connect");
const { notFound } = require("./middleware/not-found.js");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();

const routes = require("./routes/task.js");

const port = dotenv.parsed.PORT;
const app = express();

// use method -->
app.use(express.urlencoded({ extended: false }));
// for middleware
// for static files
app.use(express.static("./public"));
// for json
app.use(express.json());
// <-- use method

app.get("/", (req, res) => {
   res.sendFile(path.resolve(__dirname, "./public/pages/home.html"));
});

// using routes
app.use("/api/v1/tasks/", routes);

// 404 Not-FOUND
app.use(notFound);

// connect with mongdb
const starServer = async () => {
   try {
      // database
      await connectionDB(dotenv.parsed.DATABASE);

      // server
      app.listen(port, () => {
         console.log(`Server is Runing########------:\t${port}`);
      });
   } catch (e) {
      console.log(e);
   }
};

starServer();
