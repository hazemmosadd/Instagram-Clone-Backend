const FollowModel = require("../models/FollowModel");

const checkUserFollowingStatus = async (userName, followerId) => {
  const status = await FollowModel.selectUserFollowingStatus(userName, followerId);
  if (Boolean(Number(status.isfollowing))) return { isSuccess: true, isFollowing: true };
  else return { isSuccess: true, isFollowing: false };
};



module.exports = {checkUserFollowingStatus}