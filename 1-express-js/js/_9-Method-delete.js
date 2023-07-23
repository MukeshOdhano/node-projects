// Delete --->
app.delete("/api/v1/users/:id", (req, res) => {
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
