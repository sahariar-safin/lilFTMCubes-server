const express = require("express");

const blog = require("../controllers/blog.js");

const router = express.Router();

router.get("/", blog.getBlogContent);
router.post("/", blog.createBlogContent);
router.get('/:id', blog.getBlogByID);
router.delete("/:id", blog.deleteBlogPost);
module.exports = router;