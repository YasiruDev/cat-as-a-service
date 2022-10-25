require("dotenv").config();
const express = require("express");

module.exports = async () => {
  const app = express();
  app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-type, Accept, Authorization");
    if (req.method == "OPTIONS") {
      res.status(200).end();
    } else {
      next();
    }
  });

  app.listen(process.env.APP_PORT, () => {
    console.log("App listening on port", process.env.APP_PORT);
  });
};
