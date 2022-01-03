import Pool from 'pg-pool';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: `${__dirname}/./../.env` });


const pool = new Pool({
    user: "postgres",
    password: "121212",
    host: "localhost",
    port: process.env.DB_PORT,
    database: "healthrecords"
});

export default pool;