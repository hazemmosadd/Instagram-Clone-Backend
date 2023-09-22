const { executeQuery } = require("../utils/dbPool");

class PostModel {
  static async selectAllPostsByUsername(userName) {
    const query = `select url , like_count , comment_count FROM posts 
    join users on posts.user_id = users.id
    where username = $1`;
    console.log(userName);
    const values = [userName];
    const posts = await executeQuery(query, values);
    return posts;
  }
}

module.exports = PostModel;
