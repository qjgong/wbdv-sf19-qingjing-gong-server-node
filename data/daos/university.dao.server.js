let students = require('../students.json');
let questions = require('../questions.json');
let answers = require('../answers.json');

function createStudent(student) {
    students.push(student);
    return students;
}

function updateStudent(sid, student) {
    let oldStudent = this.findStudentById(sid);
    oldStudent.firstName = student.firstName;
    oldStudent.lastName = student.lastName;
    oldStudent.username = student.username;
    oldStudent.password = student.password;
    oldStudent.gradYear = student.gradYear;
    oldStudent.scholarship = student.scholarship;
    return oldStudent;
}

function deleteStudent(sid) {
    students = students.filter(s => s._id !== sid);
}

function findAllStudents() {
    return students;
}

function findStudentById(sid) {
    return students.find(student => student._id === sid)
}

function findAllQuestions() {
    return questions;
}

function findQuestionById(qid) {
    return questions.find(question => question._id === qid)
}

function createQuestion(question) {
    questions.push(question);
    return questions
}

function updateQuestion(qid, question) {
    let oldQuestion = this.findQuestionById(qid);
    oldQuestion.question = question.question;
    oldQuestion.type = question.type;
    oldQuestion.points = question.points;
    switch (question.type) {
        case "TRUE_FALSE":
            oldQuestion.isTrue = question.isTrue;
            break;
        case "MULTIPLE_CHOICE":
            oldQuestion.choices = question.choices;
            oldQuestion.correct = question.correct;
    }
    return oldQuestion;
}

function deleteQuestion(qid) {
    questions = questions.filter(q => q._id !== qid);
}

function answerQuestion(studentId, questionId, answer) {
    let question = this.findQuestionById(questionId);
    if (question.type === "TRUE_FALSE") {
        answers.push({
            _id: answer.id,
            student: studentId,
            question: questionId,
            trueFalseAnswer: answer.answer
        })
    } else {
        answers.push({
            _id: answer.id,
            student: studentId,
            question: questionId,
            multipleChoiceAnswer: answer.answer
        })
    }
}

function findAllAnwsers() {
    return answers
}

function findAnswerById(id) {
    return answers.find(a => a._id === id)
}

function findAnswersByStudent(studentId) {
    return answers.filter(a => a.student === studentId)
}

function findAnswersByQuestion(questionId) {
    return answers.filter(a => a.question === questionId)
}

function findAnswersByStudentAndQuestion(sid, qid) {
    return answers.filter(a => a.question === qid && a.student === sid)
}

module.exports = {
    createStudent,
    updateStudent,
    deleteStudent,
    findAllStudents,
    findStudentById,
    findAllQuestions,
    findQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion,
    answerQuestion,
    findAllAnwsers,
    findAnswerById,
    findAnswersByStudent,
    findAnswersByQuestion,
    findAnswersByStudentAndQuestion,
};
