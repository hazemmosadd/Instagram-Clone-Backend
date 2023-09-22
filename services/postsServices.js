const PostModel = require("../models/PostModel");

const getUserPosts = async (userName) => {
  const posts = await PostModel.selectAllPostsByUsername(userName);
  if (!posts.length) return { isSuccess: true, userPosts: null };
  return { isSuccess: true, userPosts: posts };
};

module.exports = { getUserPosts };
