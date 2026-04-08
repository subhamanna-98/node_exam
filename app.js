
require('dotenv').config()

const express = require('express')
const ejs = require('ejs')
const DbCon = require('./app/config/db')

const app = express()
DbCon()


app.set('view engine','ejs')
app.set('views','views')




app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const homeRouter = require('./app/routes/home.router')
app.use(homeRouter)

const studetRouter = require('./app/routes/student.routes')
app.use('/api',studetRouter)

const crudRouter = require('./app/routes/crud.router')
app.use(crudRouter)

const PORT = 5006
app.listen(PORT,() => {
    console.log(`server is running ${PORT}`);
    
})