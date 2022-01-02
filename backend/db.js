import Pool from 'pg-pool';

const pool = new Pool({
    user: "postgres",
    password: "121212",
    host: "localhost",
    port: 5432,
    database: "healthrecords"
});

export default pool;