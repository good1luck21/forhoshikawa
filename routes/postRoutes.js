const router = require("express").Router();
const { createPost, getPosts } = require("../controllers/postsController");

router.get("/posts", getPosts);
router.post("/posts", createPost);

module.exports = router;
