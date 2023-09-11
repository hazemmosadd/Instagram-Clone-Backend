// this file helps us to interact with the pool
// that we configured in config / databse.js
// utils/dbPool.js

const pool = require("../config/database");

const executeQuery = async (query, values) => {
  try {
    const start = Date.now();
    const res = await pool.query(query, values);
    const duration = Date.now() - start;
    console.log("Query Executed Successfully");
    console.log(`SQL: ${query}`);
    console.log(`Duration: ${duration}ms`);
    return res.rows;
  } catch (error) {

    console.error("Database Query Failed");
    console.error(`SQL: ${query}`);
    console.error(`Error: ${error.message}`);
    throw new Error("Database operation failed");
  }
};

const beginTransaction = async () => {
  await pool.query("BEGIN");
};

const commitTransaction = async () => {
  await pool.query("COMMIT");
};
const rollbackTransaction = async () => {
  await pool.query("ROLLBACK");
};

module.exports = { executeQuery, beginTransaction, commitTransaction, rollbackTransaction };
