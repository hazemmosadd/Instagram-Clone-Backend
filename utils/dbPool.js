// this file helps us to interact with the pool 
// that we configured in config / databse.js 

const pool = require('../config/database');


const executeQuery = async (query , values)=>{
try {
    const start = Date.now() 
    const res = await pool.query(query , values)
    const duration = Date.now() - start;
    console.log('Query Executed ');
    console.log(`SQL : ${query}`); 
    console.log(`Duration: ${ duration}`);
    return res.rows[0] 
} catch (error) {
    console.log('Query Failed! ');
    console.log(`SQL : ${query}`); 
    console.log(`Erroe : ${error}`); 

}

}

module.exports =  executeQuery