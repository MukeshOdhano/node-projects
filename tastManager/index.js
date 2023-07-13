const express = require('express')
const dotenv = require('dotenv')
require('./db/connect')
const alltasks = require('./routes/task')

const port = 5000;
const app = express()


app.use(express.json())

// app.get('/api/v1/tasks', (req, res)=>{
//    res.send('<h1>Hello World </h1>')
// })

app.use('/api/v1/tasks/', alltasks)

app.post('/api/v1/task', (req, res)=>{

})

// Get single task
app.get('/api/v1/task/:id', (req, res)=>{})
app.patch('/api/v1/task/:id', (req, res)=>{})
app.delete('/api/v1/task/:id', (req, res)=>{})

app.listen(port, ()=>{
   console.log(`Server is Runing########------:\t${port}`)
})