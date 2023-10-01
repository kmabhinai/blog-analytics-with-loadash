const express = require("express");

const blogController = require("./../controllers/blogController");
const router = express.Router();

// router.use(blogController.loadData);
router.get("/blog-stats", blogController.blogStats);
router.get("/blog-search", blogController.blogSearch);

module.exports = router;
