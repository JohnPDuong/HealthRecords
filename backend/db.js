import Pool from 'pg-pool';
import dotenv from 'dotenv';

const pool = new Pool({
    user: "postgres",
    password: "121212",
    host: "localhost",
    port: process.env.DB_PORT || 5432,
    database: "healthrecords"
});

export default pool;