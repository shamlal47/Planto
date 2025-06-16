import express from 'express';
import cors from 'cors';
import { PORT } from './config/env.js';
import connectToMongoDB from './database/mongoDb.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/auth',)



app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectToMongoDB();
    console.log('Connected to MongoDB successfully');
})