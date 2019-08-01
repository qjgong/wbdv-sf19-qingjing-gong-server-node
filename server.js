



var express = require('express')
var app = express();


var session = require('express-session')
app.use(session({
    resave: false, saveUninitialized: true,
    secret: 'shhh, dont tell anyone'
}));

// var mongoose = require('mongoose')
//
// mongoose.connect('mongodb://localhost:27017/webdev-su19', {useNewUrlParser: true});
//
// var pageSchema = mongoose.Schema({
//     title: String
// }, {collection: 'users'});
//
// var pageModel = mongoose.model('PageModel', pageSchema);
//
// pageModel.find()
//     .then(users => console.log(users));
//

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var universityService = require(
    './services/university.service.server.js');
universityService(app);

app.listen(3000);
