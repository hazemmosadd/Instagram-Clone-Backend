const userModel = require("../models/userModel");

const createUser = async (req, res) => {
  const newUser = req.body;
  try {
    const res = await userModel.createUser(newUser);
    res.status(201).json({ id: res.id, username: res.username });

  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

module.exports = { createUser };
