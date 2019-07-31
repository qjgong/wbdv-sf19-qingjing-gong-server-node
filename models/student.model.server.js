var mongoose = require('mongoose');
var studentSchema = require('./student.schema.server.js')

var studentModel =
	mongoose.model(
		'StudentModel',
		studentSchema);

module.exports = studentModel