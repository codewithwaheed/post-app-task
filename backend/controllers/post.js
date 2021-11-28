const postModel = require("../models/post");

// @req : POST
// @description : adding post
// @route : /api/post

exports.addPost = async (req, res, next) => {
  const { title, content, user } = req.body;
  if ([title, content, user].includes(undefined)) {
    return res
      .status(500)
      .json({ message: "Please provide all required fields" });
  }
  try {
    const newPost = new postModel({
      title,
      content,
      user,
    });
    await newPost.save();
    res.status(200).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @req : GET
// @description : fetching single post
// @route : /api/post/:postId

exports.getPostById = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const post = await postModel.findById(postId).lean();
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @req : PATCH
// @description : updating single post
// @route : /api/post/:postId

exports.updatePostById = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const post = await postModel
      .findByIdAndUpdate(postId, {
        $set: { ...req.body },
      })
      .lean();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
