const mongoose = require('mongoose')
const answerSchema = require('../data/models/answer.schema.server.js')
const answerModel = mongoose.model('AnswerModel', answerSchema)

module.exports = function(app) {
    function studentAnswersQuestion(req, res) {
        const answer = req.body;
        const sid = req.params.sid;
        const qid = req.params.qid;
        answer['student'] = sid;
        answer['question'] = qid;
        answerModel.create(answer)
            .then(answerDoc => res.json(answerDoc))
    }

    function findAllAnswers(req, res) {
        answerModel.find()
            .populate('student', 'firstName lastName')
            .populate('question', 'question')
            .exec()
            .then(answers => res.json(answers))
    }

    app.post('/api/student/:sid/question/:qid/answer', studentAnswersQuestion)
    app.get('/api/answers', findAllAnswers)
}
