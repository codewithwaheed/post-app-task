const UserModel = require("../models/user");
const postModel = require("../models/post");
const ObjectId = require("mongodb").ObjectID;

// add a new user service
const addNewUser = async (user) => {
  const newUser = new UserModel(user);
  await newUser.save();
  return newUser;
};

// get user by id service
const getUserById = async (userId) => {
  return UserModel.findById(userId);
};

// updated user by its id service
const updateUserById = async (userId, data) => {
  return UserModel.findByIdAndUpdate(userId, {
    $set: { ...data },
  }).lean();
};

// get post by users Id
const getPostByUserId = (userId) => {
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
  return postModel.aggregate(aggregateArr);
};

module.exports = { addNewUser, getUserById, updateUserById, getPostByUserId };
