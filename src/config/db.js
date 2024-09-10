require('dotenv').config({ path: '.env.local' }); // Load environment variables from .env.local

const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGNAME,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

const connectDB = async () => {
    try {
        await pool.connect();
        console.log('PostgreSQL connected...');
    } catch (err) {
        console.error('PostgreSQL connection error:', err);
    }
};

module.exports = {
    connectDB,
    pool
}
