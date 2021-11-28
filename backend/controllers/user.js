const UserModel = require("../models/user");
const postModel = require("../models/post");
const { Mongoose } = require("mongoose");
const ObjectId = require("mongodb").ObjectID;

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
      const newUser = new UserModel({
        email: email.toString().toLowerCase(),
        username,
        firstName,
        lastName,
      });
      await newUser.save();
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
    const user = await UserModel.findById(userId);
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
    const user = await UserModel.findByIdAndUpdate(userId, {
      $set: { ...req.body },
    });
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

  const aggregateArr = [
    { $match: { user: ObjectId(userId) } },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "userData",
      },
    },

    {
      $unwind: {
        path: "$userData",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $sort: {
        createdAt: -1,
      },
    },
  ];
  try {
    const allPosts = await postModel.aggregate(aggregateArr);
    res.status(200).json({ success: true, data: allPosts });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
