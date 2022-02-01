/* eslint-disable no-console */
import pkg from 'pg';

import env from 'dotenv';

const { Pool } = pkg;

env.config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
});
pool.connect(() => {
  console.log('Database connected');
});
export default pool;
