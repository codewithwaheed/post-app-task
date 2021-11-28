const postModel = require("../models/post");

// add a new post service
const addNewPost = async (post) => {
  const newPost = new postModel(post);
  await newPost.save();
  return newPost;
};
// get post by Id service
const getPostById = (postId) => {
  return postModel.findById(postId).lean();
};

// update post by id service
const updatePostById = (postId, data) => {
  return postModel
    .findByIdAndUpdate(postId, {
      $set: { ...data },
    })
    .lean();
};

module.exports = { addNewPost, getPostById, updatePostById };
