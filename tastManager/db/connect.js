const mongoose = require('mongoose')

const connectionStr = ''

mongoose
.connect(connectionStr)
.then(()=>console.log(`connectd to DataBase......`))
.catch(err=>console.log(err))
