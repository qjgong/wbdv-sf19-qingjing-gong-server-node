module.exports = function () {
    const mongoose = require('mongoose');
    var   connectionString =
        'mongodb://localhost:27017/whiteboard';

    if(process.env.MLAB_USERNAME_WEBDEV) {
        var username = process.env.MLAB_USERNAME_WEBDEV;
        var password = process.env.MLAB_PASSWORD_WEBDEV;
        connectionString = 'mongodb://' + username + ':' + password;
        connectionString += '@ds247637.mlab.com:47637/heroku_tvjcd4bj';
    }

    mongoose.connect(connectionString,{ useNewUrlParser: true });
};
