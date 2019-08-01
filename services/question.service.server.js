const mongoose = require('mongoose')
const questionSchema = require('../data/models/question.schema.server.js')
const questionModel = mongoose.model('QuestionModel', questionSchema)

module.exports = function(app) {
    function createQuestion(req, res) {
        const question = req.body;
        questionModel
            .create(question)
            .then(questionDoc => res.json(questionDoc))
    }

    function findAllQuestions(req, res) {
        questionModel.find()
            .then(questions => res.json(questions))
    }

    app.post('/api/questions', createQuestion)
    app.get('/api/questions', findAllQuestions)
}
