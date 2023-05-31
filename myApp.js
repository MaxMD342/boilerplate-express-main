require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello World!");

absolutePath = __dirname + '/views/index.html';

app.use("/public", express.static( __dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(absolutePath);
});

app.get("/json", function(req, res) {
    process.env.MESSAGE_STYLE;
    res.json({"message": "Hello json"});
  });
  




































 module.exports = app;
