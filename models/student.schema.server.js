var mongoose = require('mongoose')

var studentSchema = mongoose.Schema({
	_id: Number,
	username: String,
	password: {type: String, required: true},
	firstName: String,
	lastName: String,
	gradYear: Number,
	gpa: Number,
	dob: Date,
	scholarship: Number,
	createdAt: {type: Date, default: Date.now}
}, {collection: 'users'});

module.exports = studentSchema;
