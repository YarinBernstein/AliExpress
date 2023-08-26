import express, { Application } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoutes';
import cors from 'cors'
import productRouter from './routes/productRoutes';
import orderRouter from './routes/orderRoutes';
import { URL_APP } from './constants/Pathes/urlPathes';
import { HTTP_STATUS_OK } from './constants/status/HttpStatusCodes';

const app: Application = express();

dotenv.config({ path: './config.env' });

const CorsOptions: cors.CorsOptions = {
    origin: [URL_APP, 'http://172.22.176.1:3000'],
    credentials: true,
    optionsSuccessStatus: HTTP_STATUS_OK,
};
app.use(cors(CorsOptions));

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/product', productRouter);
app.use('/api/orders', orderRouter);

app.use(cookieParser());

export default app;
