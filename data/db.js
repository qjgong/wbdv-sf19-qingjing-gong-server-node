
module.exports = function () {
    const mongoose = require('mongoose');
    var connectionString =
        'mongodb://localhost:27017/whiteboard';

    if (process.env.MLAB_USERNAME_WEBDEV) {
        var username = process.env.MLAB_USERNAME_WEBDEV;
        var password = process.env.MLAB_PASSWORD_WEBDEV;
        connectionString = "mongodb://admin:admin12345@ds247637.mlab.com:47637/heroku_tvjcd4bj"
        //connectionString += '@ds247637.mlab.com:47637/heroku_tvjcd4bj';
        //username:admin
        //password:admin
    }


    mongoose.connect(connectionString, {useNewUrlParser: true});
};

