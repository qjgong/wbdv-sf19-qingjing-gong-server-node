module.exports = function (app) {
    let universityDao = require('../data/daos/university.dao.server');

    function createStudent(req, res) {
        universityDao.createStudent(req.body).then(x=>
            res.send(x)
        )
    }

    function updateStudent(req, res) {
        universityDao.updateStudent(req.params['sid'], req.body).then(x=>res.send(x))
    }

    function deleteStudent(req, res) {
       universityDao.deleteStudent(req.params['sid']).then(x=>res.send(x))
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
        universityDao.createQuestion(req.body).then(x=>res.send(x))
    }

    function findAllQuestions(req, res) {
        universityDao.findAllQuestions().then(x=>{
            res.send(x)
        })
    }

    function findQuestionById(req, res) {
       universityDao.findQuestionById(req.params['qid']).then(x=>res.send(x))
    }

    function updateQuestion(req, res) {
        universityDao.updateQuestion(req.params['qid'], req.body).then(x=>res.send(x))
    }

    function deleteQuestion(req, res) {
        universityDao.deleteQuestion(req.params['qid']).then(x=>res.send(x))
    }

    function studentAnswerQuestion(req, res) {
        universityDao.answerQuestion(req.params['sid'], req.params['qid'], req.body).then(x=>res.send(x))
    }

    function findAllAnswers(req, res) {
        universityDao.findAllAnswers().then(x=>{
            res.send(x)
        })
    }

    function findAnswerById(req, res) {
        universityDao.findAnswerById(req.params['aid']).then(x=>res.send(x))
    }

    function getAllAnswersForQuestion(req, res) {
        universityDao.findAnswersByQuestion(req.params['qid']).then(x=>res.send(x))
    }

    function getAllAnswersForStudent(req, res) {
        runiversityDao.findAnswersByStudent(req.params['sid']).then(x=>res.send(x))
    }

    function getAnswersForStudentAndQuestion(req, res) {
        universityDao.findAnswersByStudentAndQuestion(req.params['sid'], req.params['qid']).then(x=>res.send(x))
    }

    function truncateDatabase(req,res){
       universityDao.truncateDatabase().then(x=>res.send(x))
    }

    function populateDatabase(req,res){
      universityDao.populateDatabase().then(x=>res.send(x))
    }

    function createWidget(req,res){
       universityDao.createWidget().then(x=>res.send(x))
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
    app.get("/api/questions/:qid", findQuestionById);
    app.put("/api/questions/:qid", updateQuestion);
    app.delete("/api/questions/:qid", deleteQuestion);

    app.get("/api/answers",findAllAnswers);
    app.post("/api/students/:sid/questions/:qid/answers", studentAnswerQuestion);
    app.get("/api/students/:sid/questions/:qid/answers", getAnswersForStudentAndQuestion);
    app.get("/api/questions/:qid/students/:sid/answers", getAnswersForStudentAndQuestion);

    app.post("/api/widget",createWidget);

};
