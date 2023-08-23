// make an express app in typescript 
import express from 'express'
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import { router } from './routes/routes'

// make a basic express app with mongo connection
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(router)
 // make the route and listen
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});
// make a listener
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});



















/*
const mongoose = require('mongoose')
const app = require('./app')

// Connect to the local MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/scannerdb', {}, (err) => {
    // If there's no error, log a success message
    if (!err)
        console.log("The local DB has been connected")
    // If there's an error, log the error message
    else
        console.log(err)
})

// Get the port number from the environment variable "PORT"
const port = process.env.PORT

// Start the server on the specified port
const server = app.listen(port, '127.0.0.1', () => {
    // Log a message to indicate that the server is listening on the specified port
    console.log(`Server is listening on a port ${port}`)
})
*/