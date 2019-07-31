var studentDao = require('../daos/student.dao.server.js');

module.exports = function (app) {

    function createStudent(req, res) {
        console.log('createStudent')
        var student = req.body
        console.log(student)
        studentDao
            .createStudent(student)
            .then(response => res.send(response))
    }

    function findAllStudents(req, res) {
        console.log('findAllStudents')
        studentDao
            .findAllStudents()
            .then(students => res.send(students))
    }

    function findStudentById(req, res) {
        var studentId = req.params['sid'];
        studentDao
            .findStudentById(studentId)
            .then(student => res.json(student))
    }

    function findStudentByUsername(req, res) {
        var username = req.params['username'];
        studentDao
            .findStudentByUsername(username)
            .then(student => res.json(student))
    }

    function updateStudent(req, res) {
        var studentId = req.params['sid'];
        var studentUpdates = req.body
        studentDao
            .updateStudent(studentId, studentUpdates)
            .then(status => res.json(status))
    }

    function deleteStudent(req, res) {
        var studentId = req.params['sid'];
        studentDao
            .deleteStudent(studentId)
            .then(status => res.json(status))
    }

    app.post('/api/students', createStudent);
    app.get('/api/students', findAllStudents);
    app.get('/api/students/:sid', findStudentById);
    app.get('/api/students/username/:username', findStudentByUsername);
    app.put('/api/students/:sid', updateStudent);
    app.delete('/api/students/:sid', deleteStudent);
}
