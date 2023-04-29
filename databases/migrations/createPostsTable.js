const connection = require("../database");

async function createPostsTable() {
  try {
    const db = await connection.getConnection();
    await db.createCollection("posts", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["title", "content", "author"],
          properties: {
            title: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            content: {
              bsonType: "string",
              description: "must be a string and is required",
            },
            author: {
              bsonType: "string",
              description: "must be a string and is required",
            },
          },
        },
      },
    });
    console.log("Posts table created");
  } catch (err) {
    console.log(err);
  }
}

createPostsTable();

// we can't use validator because documentdb doesn't support it.
// so it's meaning we can't create a collection beforehand.
