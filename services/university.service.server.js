module.exports = function (app) {
    var universityDao = require('../data/daos/university.dao.server.js')

    function createStudent(req, res) {
        res.send(universityDao.createStudent(req.body))
    }

    function updateStudent(req, res) {
        res.json(universityDao.updateStudent(req.params['sid'], req.body))
    }

    function deleteStudent(req, res) {
        res.json(universityDao.deleteStudent(req.params['sid']))
    }

    function findAllStudents(req, res) {
        res.json(universityDao.findAllStudents());
    }

    function findStudentById(req, res) {
        res.json(
            universityDao.findStudentById(req.params['sid'])
        )
    }

    function findAllQuestions(req, res) {
        res.json(universityDao.findAllQuestions());
    }

    function findQuestionById(req, res) {
        res.json(
            universityDao.findQuestionById(req.params['qid'])
        )
    }

    function createQuestion(req, res) {
        res.json(universityDao.createQuestion(req.body))
    }

    function updateQuestion(req, res) {
        res.json(universityDao.updateQuestion(req.params['qid'], req.body))
    }

    function deleteQuestion(req, res) {
        res.json(universityDao.deleteQuestion(req.params['qid']))
    }

    function studentAnswerQuestion(req, res) {
        res.json(universityDao.answerQuestion(req.params['sid'], req.params['qid'], req.body))
    }

    function findAllAnswers(req, res) {
        res.json(universityDao.findAllAnwsers())
    }

    function findAnswerById(req, res) {
        res.json(universityDao.findAnswerById(req.params['aid']))
    }

    function getAllAnswersForQuestion(req, res) {
        res.json(universityDao.findAnswersByQuestion(req.params['qid']))
    }

    function getAllAnswersForStudent(req, res) {
        res.json(universityDao.findAnswersByStudent(req.params['sid']))
    }

    function getAnswersForStudentAndQuestion(req, res) {
        res.json(universityDao.findAnswersByStudentAndQuestion(req.params['sid'], req.params['qid']))
    }


    app.post("/api/student", createStudent);
    app.delete("/api/student/:sid", deleteStudent);
    app.get("/api/student", findAllStudents);
    app.get("/api/student/:sid", findStudentById);
    app.put("/api/student/:sid", updateStudent);

    app.post("/api/question", createQuestion);
    app.get("/api/question", findAllQuestions);
    app.get("/api/question/:qid", findQuestionById);
    app.put("/api/question/:qid", updateQuestion);
    app.delete("/api/question/:qid", deleteQuestion);

    app.post("/api/student/:sid/question/:qid/answer", studentAnswerQuestion);
    app.get("/api/answer", findAllAnswers);
    app.get("/api/answer/:aid", findAnswerById);
    app.get("/api/question/:qid/answer", getAllAnswersForQuestion);
    app.get("/api/student/:sid/answer", getAllAnswersForStudent);
    app.get("/api/student/:sid/question/:qid/answer", getAnswersForStudentAndQuestion);
    app.get("/api/question/:qid/student/:sid/answer", getAnswersForStudentAndQuestion);

};
