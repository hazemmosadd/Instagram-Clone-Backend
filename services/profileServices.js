const UserModel = require("../models/userModel");

const getUserProfileData = async (userName) => {
  const profileData = await UserModel.findProfileDataByUsername(userName);
  if (!profileData.length) return { isSuccess: false, errorMessage: "User not found " };
  return { isSuccess: true, data: profileData[0] };
};

const getUserAvatar = async (userName) => {
  const userAvatar = await UserModel.findUserAvatar(userName);
  return { isSuccess: true, avatar: userAvatar[0] };
};
module.exports = {
  getUserProfileData,
  getUserAvatar,
};
