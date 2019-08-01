
const mongoose = require('mongoose')
const questionWidgetSchema = mongoose.Schema({
    questions: [{
        type: Number,
        ref: 'QuestionModel'
    }]
}, {collection: 'question-widgets'})
module.export= questionWidgetSchema;
