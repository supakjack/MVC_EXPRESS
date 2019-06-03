const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const users = require('./routes/users')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/users',users)

app.listen(3000,()=>{
    console.log('Server run listening on port 3000')
})