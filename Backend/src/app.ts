/*
// Import required packages
const express = require('express')
const morgan = require('morgan')
const dotenv = require("dotenv")
const cors = require('cors')
const cookieParser = require('cookie-parser')

const userRouter = require('./routes/userRoutes')
const docRouter =  require('./routes/docRoutes')
const globalErrorHandler = require('./controllers/errorControllers')

// App defenitions
const app = express() 
dotenv.config({ path: "./config.env" })
const corsOptions = {
  origin: ['http://localhost:3000','http://172.22.176.1:3000'], 
  credentials:true,
  optionSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(morgan('dev'))
app.use(express.json({ limit: '2MB' }))

app.use('/api/users', userRouter)
app.use('/api/docs', docRouter)
app.use(globalErrorHandler)

module.exports = app
*/


/*import express from 'express';
//import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
//import cookieParser from 'cookie-parser';
import { Request, Response, NextFunction } from 'express';
import userRouter from './routes/userRoutes';
import globalErrorHandler from './controllers/errorControllers';

// App definitions
const app = express();
dotenv.config({ path: './config.env' });
const corsOptions: cors.CorsOptions = {
  origin: ['http://localhost:3000', 'http://172.22.176.1:3000'],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/api/users', userRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  globalErrorHandler(err, req, res, next);
});

export default app;*/
