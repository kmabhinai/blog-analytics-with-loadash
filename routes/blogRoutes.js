const express = require("express");

const blogController = require("./../controllers/blogController");
const router = express.Router();

router.route("/blog-stats").get(blogController.blogStats);

module.exports = router;
