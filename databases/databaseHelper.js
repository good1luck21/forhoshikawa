const connection = require("./database");

class DatabaseHelper {
  constructor(collection) {
    this.collection = collection;
  }

  async findOne(query, project = {}) {
    let result;
    try {
      const db = await connection.getConnection();
      result = await db.collection(this.collection).findOne(query, project);
    } catch (err) {
      console.log(err);
      return "Error";
    }
    return result;
  }

  async find(query, project = {}) {
    let result;
    try {
      const db = await connection.getConnection();
      result = await db.collection(this.collection).find(query, project);
    } catch (err) {
      console.log(err);
      return "Error";
    }
    return result;
  }

  async insertOne(query) {
    let result;
    try {
      const db = await connection.getConnection();
      result = await db.collection(this.collection).insertOne(query);
    } catch (err) {
      console.log(err);
      return "Error";
    }
    return result;
  }

  async insertMany(query) {
    let result;
    try {
      const db = await connection.getConnection();
      result = await db.collection(this.collection).insertMany(query);
    } catch (err) {
      console.log(err);
      return "Error";
    }
    return result;
  }

  async updateOne(query, set) {
    let result;
    try {
      const db = await connection.getConnection();
      result = await db.collection(this.collection).updateOne(query, set);
    } catch (err) {
      console.log(err);
      return "Error";
    }
    return result;
  }

  async updateMany(query, set) {
    let result;
    try {
      const db = await connection.getConnection();
      result = await db.collection(this.collection).updateMany(query, set);
    } catch (err) {
      console.log(err);
      return "Error";
    }
    return result;
  }

  async deleteOne(query) {
    let result;
    try {
      const db = await connection.getConnection();
      result = await db.collection(this.collection).deleteOne(query);
    } catch (err) {
      console.log(err);
      return "Error";
    }
    return result;
  }
}

module.exports = DatabaseHelper;
