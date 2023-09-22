const profileServices = require("../services/profileServices");
const HTTP_STATUS_CODES = require("../config/statusCodes");
const path = require("path");
const fs = require("fs");

const getProfileAvatar = async (req, res) => {
  try {
    const userName = req.params.username;
    const profileAvatar = await profileServices.getUserAvatar(userName);
    if (profileAvatar.isSuccess) {
      if (profileAvatar.hasAvatar) {
        res.writeHead(HTTP_STATUS_CODES.OK, { "Content-Type": profileAvatar.contentType });
        profileAvatar.readStream.pipe(res);
      } else return res.status(HTTP_STATUS_CODES.NO_CONTENT).send(); // 204 No Content
    } else return res.status(HTTP_STATUS_CODES.NOT_FOUND).json({ success: false, message: profileAvatar.errorMessage });
  } catch (error) {
    return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ success: false, message: "Internal Server Error" });
  }
};

//  this is 'profile/'
const getProfileData = async (req, res) => {
  try {
    const userName = req.params.username;
    const profileData = await profileServices.getUserProfileData(userName);
    if (profileData.isSuccess) {
      return res.status(HTTP_STATUS_CODES.OK).json({ success: true, profileData: profileData.data });
    } else return res.status(HTTP_STATUS_CODES.NOT_FOUND).json({ success: false, message: profileData.errorMessage });
  } catch (error) {
    console.log(error);
    return res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { getProfileData, getProfileAvatar };
