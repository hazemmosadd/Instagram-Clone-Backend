const { executeQuery } = require("../utils/dbPool");

class FollowModel {
  static async selectUserFollowingStatus(userName, followerId) {
    const query = `select count(*) as isFollowing from followers join users on users.id = followers.followed_id 
            where username = $1 and follower_id = $2`;
    const values = [userName, followerId];
    const isFollowing = await executeQuery(query, values);
    return isFollowing[0];
  }
}

module.exports = FollowModel;
