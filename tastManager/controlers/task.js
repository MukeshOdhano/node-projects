const allGetTask = (req, res) => {
   res.send(`<h1>Get All Task</h1>`)
}

const createTask = (req, res) =>{
   res.send('working.....')
   // res.json(req.body) //for postman
}

const getTask = (req, res) => {
   // res.send('<h1>Get Single Task</h1>')

// postman 
   res.json({id: req.params.id})

}

const updateTask = (req, res) =>{
   res.send(`<h1>Update Items</h1>`)
   
}

const deleteTask = (req, res) =>{
   res.send(`<h1>Delete Items</h1>`)

}

module.exports = {
   allGetTask,
   createTask,
   getTask,
   updateTask,
   deleteTask
}