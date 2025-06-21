import express from 'express';
import cors from 'cors';
import { PORT } from './config/env.js';
import connectToMongoDB from './database/mongoDb.js';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import orderRouter from './routes/order.route.js';
import errorHandler from './middleware/error.middleware.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/order', orderRouter);

app.use(errorHandler)


app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectToMongoDB();
    console.log('Connected to MongoDB successfully');
})