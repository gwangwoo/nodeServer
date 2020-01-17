var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.listen(3000, function() {
  console.log("start : express server on port ");
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// url routing
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/main.html");
});

app.get("/main", function(req, res) {
  res.sendFile(__dirname + "/public/main.html");
});

app.post("/email_post", function(req, res) {
  //get : req.param("email")
  console.log(req.body.email);
  res.send("<h1>Welcome tooo Hell " + req.body.email + "</h1>");
});
