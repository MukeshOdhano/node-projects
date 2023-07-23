const express = require("express");

const router = express.Router();

// get all
// ("/") is base route
router.get("/", (req, res) => {
   res.json({ success: true, data: users });
});

// in server js write code in bellw
   // --> 1st --> import router file
   // --> 2nd --> app.use(/anyroute)
   // --> 

// 