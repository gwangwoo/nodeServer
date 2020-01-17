var express = require("express");
var app = express();
app.listen(3000, function() {
  console.log("start : express server on port ");
});

app.get("/", function(req, res) {
  //   res.send("<h1>hi friend</h1>");
  res.sendFile(__dirname + "/public/main.html");
});
