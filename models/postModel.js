const { ObjectId } = require("mongodb");
const DBHelper = require("../databases/databaseHelper");
const db = new DBHelper("posts");

class PostModel {
  async getPosts() {
    const posts = await db.find();
    return posts;
  }

  async createPost(post) {
    const result = await db.insertOne(post);
    return result;
  }
}

module.exports = PostModel;
