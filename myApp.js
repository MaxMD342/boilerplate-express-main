let express = require('express');
let app = express();
console.log("Hello World!");

absolutePath = __dirname + '/views/index.html';

app.get("/", function(req, res) {
  res.send(absolutePath);
});




































 module.exports = app;