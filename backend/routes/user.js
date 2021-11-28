const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

router.post("/", controller.addUser);
router.get("/:userId", controller.getUserById);
router.patch("/:userId", controller.updateUserById);
router.get("/:userId/posts", controller.getPostByUserId);

module.exports = router;
