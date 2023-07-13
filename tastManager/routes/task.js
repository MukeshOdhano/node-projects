const express = require('express')
const {allGetTask, createTask, getTask, updateTask, deleteTask} = require('../controlers/task')

const router = express.Router()


router.route('/').get(allGetTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router