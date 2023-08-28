const executeQuery = require("../utils/dbPool");

class userModel {
  static async createUser  (userData)  {
    console.log(userData);
    const { userName, fullName, email,phoneNumber , password } = userData;
    const query = `INSERT INTO users (username , fullname , email ,phone ,  password) 
                    VALUES ($1 , $2 , $3 , $4 , $5) 
                    RETURNING id, username `;
    const values = [userName, fullName, email, phoneNumber ,  password];
    const res = await executeQuery(query, values);
    return res 
    
  };
}

module.exports = userModel 

/* 
1
create table users( id SERIAL PRIMARY KEY  ,
				  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP ,
				  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP ,
				  username VARCHAR(30) UNIQUE NOT NULL  , 
				  bio VARCHAR (200) ,
				  avatar VARCHAR(200) , 
				  phone VARCHAR (25) , 
				  email VARCHAR (40) , 
				  password VARCHAR(50) , 
				  CHECK (COALESCE(phone , email) is NOT NULL))


2
ALTER TABLE users ADD COLUMN fullName varchar(60) NOT NULL 


                  */