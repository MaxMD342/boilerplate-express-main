let express = require('express');
let app = express();
console.log("Hello World!");

absolutePath = __dirname + '/views/index.html';

app.use(express.static("/public", __dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(absolutePath);
});




































 module.exports = app;
