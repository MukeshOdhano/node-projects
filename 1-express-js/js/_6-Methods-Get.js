const express = require("express");

let { users } = require("../data.js");

const app = express();

app.get("/api/v1/users", (req, res) => {
   res.json({ success: true, data: users });
});


app.listen(5000, () => {
   console.log(`server is running at localhost:${5000}/api/v1/users`);
});
