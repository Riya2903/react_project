var express = require('express');
var router = express.Router();
const app = express();
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/users", {useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("connected to database"));
/*var nameSchema = new mongoose.Schema({username:String;});
var user = mongoose.model("user", nameSchema);
app.post("/username", (req, res) => {});*/
router.get('/', function (req, res, next) {
    console.log(req.query.name);
    res.send('API server');
});
app.use(express.json());
const usernameRouter = require('./routes/username');
app.use('/username', usernameRouter);
module.exports = router;
