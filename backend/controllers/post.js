const services = require("../services");

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
    const postData = {
      title,
      content,
      user,
    };
    const newPost = await services.post.addNewPost(postData);
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
    const post = await services.post.getPostById(postId);
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
    await services.post.updatePostById(postId, req.body);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
