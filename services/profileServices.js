const UserModel = require("../models/userModel");
const path = require("path");
const fs = require("fs");

const getUserProfileData = async (userName) => {
  const profileData = await UserModel.selectProfileDataByUserName(userName);
  if (!profileData.length) return { isSuccess: false, errorMessage: "User not found " };
  return { isSuccess: true, data: profileData[0] };
};

const getUserProfileStatus = async (userName) => {
  const isPrivate = await UserModel.selectUserProfileStatus(userName);
  if (!isPrivate.length) return { isSuccess: false, errorMessage: "User not found " };
  return {isSuccess : true , isPrivate : isPrivate[0].private}
};

const getUserAvatar = async (userName) => {
  const userAvatar = await UserModel.selectAvatarByUserName(userName);
  console.log(userAvatar);
  if (!userAvatar.length) return { isSuccess: false, errorMessage: "User not found " };
  if (userAvatar[0].avatar === null) return { isSuccess: true, hasAvatar: false };
  const imagePath = path.join(__dirname, "..", "uploads", "avatars", userAvatar[0].avatar);
  const readStream = fs.createReadStream(imagePath);
  // Set the Content-Type based on the file extension
  const ext = path.extname(imagePath);
  const contentType = ext === ".png" ? "image/png" : "image/jpeg"; // Add more types as needed
  return { isSuccess: true, hasAvatar: true, readStream: readStream, contentType: contentType };
};

module.exports = {
  getUserProfileData,
  getUserAvatar,
  getUserProfileStatus  , 
};
