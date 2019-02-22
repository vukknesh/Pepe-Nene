const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./database");

const app = express();

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/produtos", require("./api/produtos"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

db.query("SELECT NOW()", (err, res) => {
  if (err.error) return console.log(err.error);

  console.log(`PostgreSQL connected: ${res[0].now}.`);
});

module.exports = app;
