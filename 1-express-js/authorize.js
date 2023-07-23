const auth = (req, res, next) => {
   const { user } = req.query
   if (user === "Mukesh") {
      res
         .status(200)
         .json({
            content: "Authorized",
            admin: user,
            date: new Date().getFullYear()
         })
   } else {
   
      res.status(401)
         .send({
            content: "Un-authorized",
            test: "fail",
            message: "user is not authorized",
         });
   }
   next();
};

module.exports = auth;
