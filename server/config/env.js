
import {config} from 'dotenv';
config({path: './.env.local'});

export const {DB_URI,
    SERVER_URI,
    PORT,
    JWT_SECRET,
    JWT_EXPIRY,
    GEMINI_API_KEY
} = process.env;


