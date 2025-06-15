
import {config} from 'dotenv';
config({path: '.env.local'});

export const {DB_URI,
    SERVER_URI,
    PORT,
} = process.env;


