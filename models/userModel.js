// models/userModel.js

const { executeQuery } = require("../utils/dbPool");

class UserModel {
  static async insertUser(userData) {
    const { userName, fullName, email, phoneNumber, password } = userData;

    const query = `INSERT INTO users (username, fullname, email, phone, password) 
                   VALUES ($1, $2, $3, $4, $5) 
                   RETURNING id, username`;
    const values = [userName, fullName, email, phoneNumber, password];
    const res = await executeQuery(query, values);
    return res[0];
  }

  static async selectUserByUserName(userName) {
    const query = `SELECT * FROM users WHERE username = $1 `;
    const values = [userName];
    const res = await executeQuery(query, values);
    return res;
  }

  static selectProfileDataByUserName = async (userName) => {
    const query = `SELECT id, username, bio, fullname,private , 
    (SELECT count(*) FROM followers WHERE followers.followed_id = users.id) AS followers,
    (SELECT count(*) FROM followers WHERE followers.follower_id = users.id) AS following,
    (SELECT count(*) FROM posts WHERE posts.user_id = users.id) AS posts
     FROM users
     WHERE users.username = $1; `;
    const values = [userName];
    const res = await executeQuery(query, values);
    console.log(res);
    return res;
  };

  static selectAvatarByUserName = async (userName) => {
    const query = `SELECT avatar from users WHERE username = $1`;
    const values = [userName];
    const res = await executeQuery(query, values);
    return res;
  };

  static selectUserProfileStatus = async (userName) => {
    console.log("heey");
    const query = "select private from users where username = $1";
    const values = [userName];
    const res = await executeQuery(query, values);
    return res;
  };
}

module.exports = UserModel;
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
