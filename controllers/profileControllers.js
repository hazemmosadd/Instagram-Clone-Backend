const profileServices = require("../services/profileServices");
const HTTP_STATUS_CODES = require("../config/statusCodes");

const getMyProfileAvatar = async (req, res) => {
  try {
    const userName = req.session.userName;
    const profileAvatar = await profileServices.getUserAvatar(userName);
    if (profileAvatar.isSuccess) {
      return res.status(HTTP_STATUS_CODES.OK).json({ success: true, profileAvatar: profileAvatar.avatar });
    }
  } catch (error) {
    return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ success: false, message: "Internal Server Error" });
  }
};

//  this is 'profile/'
const getMyProfileData = async (req, res) => {
  try {
    const userName = req.session.userName;
    const profileData = await profileServices.getUserProfileData(userName);
    if (profileData.isSuccess) {
      return res.status(HTTP_STATUS_CODES.OK).json({ success: true, profileData: profileData.data });
    } else return res.status(HTTP_STATUS_CODES.NOT_FOUND).json({ success: false, message: profileData.errorMessage });
  } catch (error) {
    console.log(error);
    return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { getMyProfileData, getMyProfileAvatar };
