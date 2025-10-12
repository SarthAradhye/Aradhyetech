//declaring all libraries imported
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3050

//creating express application

const app = express()

app.listen(port , ()=>{
    console.log("Welcome shriman")
})