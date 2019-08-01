var mongoose = require('mongoose');
var studentSchema = require('./student.schema.server.js')

module.exports = mongoose.model('StudentModel', studentSchema);
