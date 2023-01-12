const express = require("express");

const app = express();
var addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let date = new Date();
  let final = addDays(date, 100);

  response.send(
    `${final.getDate()}/${final.getMonth() + 1}/${final.getFullYear()}`
  );
});

module.exports = app;
