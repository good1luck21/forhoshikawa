const express = require("express");
const cors = require("cors");
const dbConnection = require("./databases/database");
const postRoutes = require("./routes/postRoutes");
const app = express();
const port = 5555;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", postRoutes);

// practice for callback functions
function firstFunction(callback) {
  console.log("first function");
  callback("second function");
}

function secondFunction(data) {
  console.log(data);
}

firstFunction(secondFunction);

console.log(process.env.DOCDB_URI);

dbConnection
  .createConnection()
  .then(() => {
    app.listen(port, () => console.log(`Listening on port: ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
