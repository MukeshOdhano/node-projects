let { users } = require("../data");
const express = require("express");

const router = express.Router();

// get all
router.get("/", (req, res) => {
   res.json({ success: true, data: users });
});

// post
router.post("/", (req, res) => {
   const { name } = req.body;
   if (!name) {
      return res.status(404).json({ success: false, msg: "provide name" });
   }
   return res.status(200).json({ success: true, data: [...users, name] });
});

// get single
router.get("/:id", (req, res) => {
   // res.json({ id: req.params.id})

   // instead of for loop you can use find method
   const user = users.find((user) => user.id === Number(req.params.id));
   if (!user) {
      return res
         .status(404)
         .json({ success: false, msg: "data is not availble" });
   }
   return res.status(200).json({ success: true, data: user });
});

// put -->
router.put("/:id", (req, res) => {
   const { id } = req.params;
   // const { name } = req.body

   const user = users.find((person) => person.id === Number(id));
   if (!user || !req.body.name) {
      return res.status(404).json({ success: false, msg: "faild to update" });
   }

   const newUsers = users.map((person) => {
      if (person.id === Number(id)) {
         person.name = req.body.name;
      }
      return person;
   });

   // user.name = req.body.name
   res.status(200).json({ success: true, msg: "updated", data: newUsers });
});
// <---

// Delete --->
router.delete("/:id", (req, res) => {
   const user = users.find((person) => person.id === Number(req.params.id));

   if (!user) {
      return res.status(404).json({
         success: false,
         msg: `couldn't delete the item with id ${req.params.id}`,
      });
   }

   const newUsers = users.filter((person) => {
      return person.id !== user.id;
   });

   res.status(200).json({
      success: true,
      msg: `item has been deleted with id ${req.params.id}`,
      "deleted item": user,
      data: newUsers,
   });
});
// <---

module.exports = router
