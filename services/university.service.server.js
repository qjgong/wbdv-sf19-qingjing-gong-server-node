module.exports = function (app) {
    let universityDao = require('../data/daos/university.dao.server');

    function createStudent(req, res) {
        universityDao.createStudent(req.body).then(x=>
            res.send(x)
        )
    }

    function updateStudent(req, res) {
        res.send(universityDao.updateStudent(req.params['sid'], req.body))
    }

    function deleteStudent(req, res) {
        res.send(universityDao.deleteStudent(req.params['sid']))
    }

    function findAllStudents(req, res) {
        universityDao.findAllStudents().then(x=>{
            res.send(x)
        })
    }

    function findStudentById(req, res) {
        universityDao.findStudentById(req.params['sid']).then(x=>
            res.send(x)
        )
    }

    function createQuestion(req, res) {
        res.send(universityDao.createQuestion(req.body))
    }

    function findAllQuestions(req, res) {
        res.send(universityDao.findAllQuestions())
    }

    function findQuestionById(req, res) {
        res.send(universityDao.findQuestionById(req.params['qid']))
    }

    function updateQuestion(req, res) {
        res.send(universityDao.updateQuestion(req.params['qid'], req.body))
    }

    function deleteQuestion(req, res) {
        res.send(universityDao.deleteQuestion(req.params['qid']))
    }

    function studentAnswerQuestion(req, res) {
        res.send(universityDao.answerQuestion(req.params['sid'], req.params['qid'], req.body))
    }

    function findAllAnswers(req, res) {
        res.send(universityDao.findAllAnswers())
    }

    function findAnswerById(req, res) {
        res.send(universityDao.findAnswerById(req.params['aid']))
    }

    function getAllAnswersForQuestion(req, res) {
        res.send(universityDao.findAnswersByQuestion(req.params['qid']))
    }

    function getAllAnswersForStudent(req, res) {
        res.send(universityDao.findAnswersByStudent(req.params['sid']))
    }

    function getAnswersForStudentAndQuestion(req, res) {
        res.send(universityDao.findAnswersByStudentAndQuestion(req.params['sid'], req.params['qid']))
    }

    function truncateDatabase(req,res){
        res.send(universityDao.truncateDatabase())
    }

    function populateDatabase(req,res){
        res.send(universityDao.populateDatabase())
    }

    //tested
    app.delete("/api/all", truncateDatabase);
    app.post("/api/populate", populateDatabase);


    app.post("/api/students", createStudent);
    app.get("/api/students", findAllStudents);
    app.get("/api/students/:sid", findStudentById);
    app.put("/api/students/:sid", updateStudent);
    app.delete("/api/students/:sid", deleteStudent);

    app.post("/api/questions", createQuestion);
    app.get("/api/questions", findAllQuestions);
    app.get("/api/question/:qid", findQuestionById);
    app.put("/api/question/:qid", updateQuestion);
    app.delete("/api/question/:qid", deleteQuestion);

    app.post("/api/students/:sid/questions/:qid/answers", studentAnswerQuestion);
    app.get("/api/students/:sid/questions/:qid/answers", getAnswersForStudentAndQuestion);
    app.get("/api/questions/:qid/students/:sid/answers", getAnswersForStudentAndQuestion);

};
