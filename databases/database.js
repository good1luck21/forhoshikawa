const { MongoClient } = require("mongodb");

let dbConn;

async function createConnection() {
  const client = new MongoClient(
    `mongodb://${process.env.DOCDB_USER}:${process.env.DOCDB_PASSWORD}@${process.env.DOCDB_URI},${process.env.DOCDB_URI2}:${process.env.DOCDB_PORT}/?replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  await client.connect();
  dbConn = client.db("codist");
}

async function getConnection() {
  if (!dbConn) {
    await createConnection();
  }
  return dbConn;
}

module.exports = {
  createConnection,
  getConnection,
};
