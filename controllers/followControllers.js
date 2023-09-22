const followServices = require("../services/followServices");
const HTTP_STATUS_CODES = require("../config/statusCodes");

const getFollowingStatus = async (req, res) => {
  const followerId = req.session.userId;
  const userName = req.params.username;
  try {
    const status = await followServices.checkUserFollowigStatus(userName, followerId);
    if (status.isSuccess && status.isFollowing) {
      return res.status(HTTP_STATUS_CODES.OK).json({ success: true, isFollowing: true });
    } else return res.status(HTTP_STATUS_CODES.OK).json({ success: true, isFollowing: false });
  } catch (error) {
    return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  getFollowingStatus,
};
