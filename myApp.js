let express = require('express');
let app = express();
console.log("Hello World!");

absolutePath = __dirname + '/views/index.html';

app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
})

app.use("/public", express.static( __dirname + "/public"));


app.get("/", function(req, res) {
  res.sendFile(absolutePath);
});

app.get("/json", function(req, res, next) {
    if (process.env.MESSAGE_STYLE === "uppercase"){
        let response = "Hello json".toUpperCase();
        res.json({"message": response});
    }
    else{
        let response = "Hello json";
        res.json({"message": response});
    }
  });
  



































 module.exports = app;
