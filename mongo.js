var express = require('express');
var testAPIRouter = require("./routes/testAPI");

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/users");
var nameSchema = new mongoose.Schema({ username: String});
var User = mongoose.model("User", nameSchema);
app.get("/", (req, res) => { res.sendFile(__dirname + "./routes/testAPI");});
app.post("/", (req, res) => { var myData = new User(req.query.name);
myData.save() .then(item => {
   res.send("Name saved to database");
  }) .catch(err => {
    res.status(400).send("Unable to save to database");
  });
var myobj = {name: req.query.name };
users.collection("username").insertOne(myobj, function(err, res) {

db.close();
    });
