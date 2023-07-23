const express = require("express");

// router file -->
const apiRoute = require("./routes/api")
// <---

// controler file to controle router -->
// const apiRoute = require("./controlers/api")
// <---

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// for router --->
app.use("/api/v1/users", apiRoute)
// <---

app.listen(3000, () => {
   console.log(`server is running at localhost:${3000}`);
});
