module.exports = function(app) {
    var students = require('../data/students.json');
    var questions = require('../data/questions.json');
    var answers = require('../data/answers.json');
    function findAllStudents(req, res) {
        res.json(students);
    }
    function findStudentById(req, res) {
        res.json(
            students.find(student => student._id == req.params['sid'])
        )
    }
    function findAllQuestions(req, res) {
        res.json(questions);
    }
    function findQuestionById(req, res) {
        res.json(
            questions.find(question => question._id == req.params['qid'])
        )
    }
    app.get("/api/students", findAllStudents);
    app.get("/api/students/:sid", findStudentById);
    app.get("/api/questions", findAllQuestions);
    app.get("/api/questions/:qid", findQuestionById);
}
