// this is file is for router controler
//

let { users } = require("../data");
const express = require("express");
const {
   getApi,
   singleGetApi,
   postApi,
   putApi,
   deleteApi,
} = require("./router-api");
const router = express.Router();

// // get all
// router.get("/", getApi);

// // post
// router.post("/", postApi);

// // get single
// router.get("/:id", singleGetApi);

// // put -->
// router.put("/:id", putApi);
// // <---

// // Delete --->
// router.delete("/:id", deleteApi);
// // <---

// best method for router 
router.route("/")
   .get(getApi)
   .post(postApi)
   
router.route("/:id")
   .get(singleGetApi)
   .put(putApi)
   .delete(deleteApi)

module.exports = router;
