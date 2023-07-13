const mongoose = require('mongoose')

const connectionStr = 'mongodb+srv://Mukesh:Mukesh@cluster0.cam6lhx.mongodb.net/Task_Manager?retryWrites=true&w=majority'

mongoose
.connect(connectionStr)
.then(()=>console.log(`connectd to DataBase......`))
.catch(err=>console.log(err))
