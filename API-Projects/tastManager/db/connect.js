const mongoose = require("mongoose");

const connectionDB = (dbUrl) => {
   return mongoose
      .connect(`${dbUrl}`)
      // .then(() => console.log("conected..."))
      // .catch((e) => console.log(e));
};

module.exports = { connectionDB };
