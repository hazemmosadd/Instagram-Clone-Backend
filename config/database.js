const { Pool } = require("pg");


poolConnectionData = {
  user: process.env.DB_USER ,
  host: process.env.DB_HOST ,
  database: process.env.DB_NAME ,
  password: process.env.DB_PASSWORD ,
  port: process.env.DB_PORT ,
  max: 20, // maximum size of the pool
  idleTimeoutMillis: 30000 // time a client may sit idle
};

const pool = new Pool(poolConnectionData);
module.exports = pool;
