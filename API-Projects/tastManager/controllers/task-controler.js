const Tasks = require("../models/task");

// get All
const allGetTask = async (req, res) => {
   try {
      const all_Tasks = await Tasks.find({});
      res.status(200).json({ all_Tasks });
   } catch (error) {
      res.status(500).json(error);
   }
};

// post
const createTask = async (req, res) => {
   try {
      const task = await Tasks.create(req.body);
      // res.status(201).json({ task });
      res.status(201).redirect("/");
   } catch (erorr) {
      res.status(500).json({ erorr });
   }
};

// git single
const getTask = async (req, res) => {
   try {
      const single_Task = await Tasks.findOne({ _id: req.params.id });
      if (!single_Task) {
         return res.status(404).json({ msg: "could not found task..:(" });
      }
      res.status(200).json(single_Task);
   } catch (error) {
      res.status(500).json(error);
   }
};

const updateTask = async (req, res) => {
   const { id } = req.params;
   try {
      const task = await Tasks.findOneAndUpdate({ _id: id }, req.body);

      if (!task) {
         res.status(404).json({ status: false, msg: "could not upadate data" });
      }

      res.status(200).json({
         msg: "task has been updated",
         newTask: req.body,
         oldData: task,
      });
   } catch (e) {
      res.status(500).json(e);
   }
};

const deleteTask = async (req, res) => {
   try {
      const deleteTask = await Tasks.findOneAndDelete({ _id: req.params.id });
      if (!deleteTask) {
         return res
            .status(404)
            .json({ msg: "could not found task...that you want to delet" });
      }

      res.status(200).json({ msg: "task has been deleted", task: deleteTask });
   } catch (e) {
      res.status(500).json(e);
   }
};

module.exports = {
   allGetTask,
   createTask,
   getTask,
   updateTask,
   deleteTask,
};
