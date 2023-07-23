// basics for practice
// copy this in browser -->
// /api/v1/query?proprty1=value-1&property-2=value-2

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

app.get("/api/v1/query", (req, res) => {
   // console.log(req.query)
   res.status(200).json(req.query);
});

// real code start here
// Query String --> start
app.get("/api/v1/query", (req, res) => {
   // console.log(req.query)
   // res.status(200).json(req.query)

   const { search, limit } = req.query;
   let sorted = [...projects];

   if (search) {
      sorted = projects.filter((project) => {
         return project.name.startsWith(search);
      });
   }

   if (limit) {
      sorted = projects.slice(0, Number(limit));
   }

   if (sorted.length < 1) {
      return res.status(200).json({
         success: true,
         data: [
            {
               content: "search was sucessful",
               problem: "could not find item",
            },
         ],
      });
   }
   res.status(200).json(sorted);
});

// <-- end Query String

// 404 response
app.all("*", (req, res) => {
   // chain method
   res.status(404).sendFile(path.resolve(__dirname, "./components/error.html"));
});

app.listen(3000, () => {
   console.log(`server is running at localhost:${3000}`);
});
