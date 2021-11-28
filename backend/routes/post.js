const express = require("express");
const router = express.Router();
const controller = require("../controllers/post");

router.post("/", controller.addPost);
router.get("/:postId", controller.getPostById);
router.patch("/:postId", controller.updatePostById);

module.exports = router;
