// put -->
app.put("/api/v1/users/:id", (req, res) => {
   const { id } = req.params;
   // const { name } = req.body

   const user = users.find((person) => person.id === Number(id));
   if (!user || !req.body.name) {
      return res.status(401).json({ success: false, msg: "faild to update" });
   }

   const newUsers = users.map((person) => {
      if (person.id === Number(id)) {
         person.name = req.body.name;
      }
      return person;
   });

   // user.name = req.body.name
   res.status(201).json({ success: true, msg: "updated", data: newUsers });
});
// <---
