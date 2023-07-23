const express = require("express");
const path = require("path");

// data
const { projects } = require("./data.js");

const app = express();

// setup static file
app.use(express.static("./public"));

app.get("/", (req, res) => {
   res.status(200).sendFile(path.resolve(__dirname, "./components/home.html"));
});

app.get("/api/projects/:proj_Id", (req, res) => {
   // console.log(req.params.proj_Id)

   const { proj_Id } = req.params;
   const singlProject = projects.find((proj) => proj.id === Number(proj_Id));

   if (!singlProject) {
      return res
         .status(404)
         .sendFile(path.resolve(__dirname, "./components/error.html"));
   }

   return res.status(200).json(singlProject);
});

// params -- extra,
app.get("/api/projects/:project_Id/reviews/:reviewId", (req, res) => {
   console.log(req.params);

   res.send("Hi There");
});
