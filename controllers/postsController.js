const PostModel = require("../models/postModel");
const Post = new PostModel();

async function getPosts(req, res) {
  const posts = await Post.getPosts();
  res.json(posts);
}

async function createPost(req, res) {
  const post = req.body;
  const result = await Post.createPost(post);
  res.json(result);
}

module.exports = {
  getPosts,
  createPost,
};
