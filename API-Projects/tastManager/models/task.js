const mongoose = require("mongoose");

// Scheme
const TaskSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, `must provide name`],
      trim: true,
      maxlength: [30, "name can not be more than 30 character."],
   },
   completed: {
      type: Boolean,
      default: false
   },
});

// Model
module.exports = mongoose.model("Tasks", TaskSchema);

/* 
// for schema with validation
   name: {
      type: String,
      required: [true, `must provide name`],
      trim: true,
      maxlength: [30, "name can not be more than 30 character."]
   },
*/

/* 
// simple shcema 
const TaskSchema = new mongoose.Schema({
   name:String,
   completed: Boolean,
});
*/
