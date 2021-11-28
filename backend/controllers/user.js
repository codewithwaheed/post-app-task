const UserModel = require("../models/user");
const services = require("../services");

// @req : POST
// @description : adding user
// @route : /api/user

exports.addUser = async (req, res, next) => {
  try {
    const { email, username, firstName, lastName } = req.body;
    const user = await UserModel.findOne({
      email: email.toString().toLowerCase(),
    });
    if (user) {
      return res.status(500).json({
        message: "User already exist !",
      });
    } else {
      const userData = {
        email: email.toString().toLowerCase(),
        username,
        firstName,
        lastName,
      };
      const newUser = await services.user.addNewUser(userData);
      res.status(200).json({ success: true, data: newUser });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @req : GET
// @description : fetching single user
// @route : /api/user/:userId

exports.getUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await services.user.getUserById(userId);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @req : PATCH
// @description : updating single user
// @route : /api/user/:userId

exports.updateUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    await services.user.updateUserById(userId, req.body);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @req : GET
// @description : get all posts by single user
// @route : /api/user/:userId/posts

exports.getPostByUserId = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const allPosts = await services.user.getPostByUserId(userId);
    res.status(200).json({ success: true, data: allPosts });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
