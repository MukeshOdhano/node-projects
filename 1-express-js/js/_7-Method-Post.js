const express = require("express");
const path = require("path");
const { users } = require("../data");

const app = express();

app.use(express.static("../methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

// js post form -->
app.get("/api/v1/users", (req, res) => {
   res.json({ data: users });
});
app.post("/api/v1/users", (req, res) => {
   const {name} = req.body

   if (!name) {
      return res.status(400).json({success: false, msg: "please provide name or value"})
   }

   res.status(201).json({success: true, person: name});
});
// <-- 

app.get("/", (req, res) => {
   res.status(200).sendFile(
      path.resolve(__dirname, "../methods-public/regular.html")
   );
});

// Post method ---> "Insert DATA"
// regular form post --->
app.post("/r/login", (req, res) => {
   // console.log(req.body.r_name);

   if (req.body.r_name) {
      return res.status(200).json({ success: true, data: req.body });
   }

   return res
      .status(401)
      .json({ success: false, message: "please enter name" });
});
// <---

app.listen(3000, () => {
   console.log(`server is running at localhost:${3000}/api/v1/user/post`);
});
