import * as mongoose from 'mongoose';
import app from './app';
import { URL_MONGO_DB } from './constants/Pathes/urlPathes';


const startServer = async () => {
    try {
        await mongoose.connect(URL_MONGO_DB);

        const port: number = parseInt(process.env.PORT || '3000', 10);

        const server = app.listen(port, '127.0.0.1', () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

startServer();

