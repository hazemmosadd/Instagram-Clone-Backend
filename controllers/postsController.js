const HTTP_STATUS_CODES = require("../config/statusCodes");
const postsServices = require("../services/postsServices");
const followServices = require("../services/followServices");
const profileServices = require("../services/profileServices");

const getProfilePosts = async (req, res) => {
  try {
    //destructuring with renaming
    const { userId: requesterId, userName: requesterUsername } = req.session;
    const { username: targetUsername } = req.params;
    const isOwnProfile = requesterUsername === targetUsername;

    let isFollowing = false;
    let isPrivate = false;

    if (!isOwnProfile) {
      // Check if the requester is following the user
      ({ isFollowing } = await followServices.checkUserFollowingStatus(targetUsername, requesterId));
      console.log(isFollowing);
      // Check if the account is private
      ({ isPrivate } = await profileServices.getUserProfileStatus(targetUsername));
    }
    if (!isFollowing && isPrivate && !isOwnProfile) {
      return res.status(HTTP_STATUS_CODES.FORBIDDEN).json({ success: false, message: "You can't access this profile" });
    }

    const { userPosts } = await postsServices.getUserPosts(targetUsername);
    console.log(targetUsername);
    console.log(userPosts);
    if (!userPosts) res.status(HTTP_STATUS_CODES.NOT_FOUND).json({ success: true, userPosts: [] });
    else return res.status(HTTP_STATUS_CODES.OK).json({ success: true, userPosts: userPosts });
  } catch (error) {
    return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { getProfilePosts };
