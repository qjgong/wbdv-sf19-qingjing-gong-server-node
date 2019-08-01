const studentModel = require('../models/student.model.server');
const questionModel = require("../models/question.model.server");
const quizWidgetModel = require("../models/quiz-widget.model.server");
const answerModel = require("../models/answer.model.server");

createStudent = student => studentModel.create(student);
findAllStudents = () => studentModel.find().sort({"_id":1});
findStudentById = studentId => studentModel.findById(studentId);

updateStudent = (studentId, student) => studentModel.update({_id: studentId}, {$set: student});
deleteStudent = studentId => studentModel.remove({_id: studentId});


createQuestion = question => questionModel.create(question);
findQuestionById = questionID => questionModel.findById(questionID);
deleteQuestion = questionId => questionModel.remove({_id: questionId});
findAllQuestions = () => questionModel.find().sort({"_id":1});
createWidget = widget => quizWidgetModel.create(widget);
findAllAnswers = () => answerModel.find().sort({"_id":1});
findAnswerById = answerId => answerModel.findById(answerId);
deleteAnswer = answerId => answerModel.remove({_id: answerId});
findAnswersByStudent = (studentId) => answerModel.find({student: studentId});
findAnswersByQuestion = (questionId) => answerModel.find({question: questionId});
answerQuestion = (studentId, questionId, answer) => {
    return new Promise(function (resolve, reject) {
        Promise.all([
            findStudentById(studentId).exec(),
            findQuestionById(questionId).exec()]).then(function (values) {
            let student = values[0];
            let question = values[1];
            answer.student = student;
            answer.question = question;
            answerModel.create(answer).then(function () {
                resolve("created");
            });
        });
    });
};

truncateDatabase = () => {
    let studentDelete = studentModel.deleteMany({}).exec();
    let questionDelete = questionModel.deleteMany({}).exec();
    let quizDelete = quizWidgetModel.deleteMany({}).exec();
    let answerDelete = answerModel.deleteMany({}).exec();
    return Promise.all([studentDelete, questionDelete, quizDelete, answerDelete]);
};

populateDatabase = () => {
    let alice = createStudent({

        _id: 123,
        firstName: "Alice", lastName: "Wonderland", username: "alice",
        password: "alice", gradYear: 2020, scholarship: 15000
    }

    );

    let bob = createStudent({
        _id: 234,
        firstName: "Bob", lastName: "Hope", username: "bob",
        password: "bob", gradYear: 2021, scholarship: 12000
    });

    let q1 = createQuestion({
        _id: 321,
        question: "Is the following schema valid?",
        points: 10,
        questionType: "TRUE_FALSE",
        trueFalse: {isTrue: false},
    });

    let q2 = createQuestion({
        _id: 432,
        question: "DAO stands for Dynamic Access Object.",
        points: 10,
        questionType: "TRUE_FALSE",
        trueFalse: {isTrue: false},
    });

    let q3 = createQuestion({
        _id: 543,
        question: "What does JPA stand for?",
        points: 10,
        questionType: "MULTIPLE_CHOICE",
        multipleChoice: {
            choices: "Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations",
            correct: 1
        }
    });

    let q4 = createQuestion({
        _id: 654,
        question: "What does ORM stand for?",
        points: 10,
        questionType: "MULTIPLE_CHOICE",
        multipleChoice: {
            choices: "Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping",
            correct: 4
        }
    });
    return new Promise(function (resolve, reject) {
        Promise.all([alice, bob, q1, q2, q3, q4]).then(function (values) {

            let alice_id = 123;
            let bob_id = 234;
            let schema_valid_id = 321;
            let dao_standsfor_id = 432;
            let jpa_standsfor_id = 543;
            let orm_standsfor_id = 654;

            let answer1 = answerQuestion(alice_id, schema_valid_id, {
                _id: 123,
                trueFalseAnswer: true,
            });

            let answer2 = answerQuestion(alice_id, dao_standsfor_id, {
                _id: 234,
                trueFalseAnswer: false,
            });

            let answer3 = answerQuestion(alice_id, jpa_standsfor_id, {
                _id: 345,
                multipleChoiceAnswer: 1
            });

            let answer4 = answerQuestion(alice_id, orm_standsfor_id, {
                _id: 456,
                multipleChoiceAnswer: 2
            });

            let answer5 = answerQuestion(bob_id, schema_valid_id, {
                _id: 567,
                trueFalseAnswer: false,
            });

            let answer6 = answerQuestion(bob_id, dao_standsfor_id, {
                _id: 678,
                trueFalseAnswer: true,
            });

            let answer7 = answerQuestion(bob_id, jpa_standsfor_id, {
                _id: 789,
                multipleChoiceAnswer: 3
            });
            let answer8 = answerQuestion(bob_id, orm_standsfor_id, {
                _id: 890,
                multipleChoiceAnswer: 4
            });

            Promise.all([
                answer1,
                answer2,
                answer3,
                answer4,
                answer5,
                answer6,
                answer7,
                answer8]).then(function () {
                resolve("Populated database");
            });
        });
    });

};
module.exports = {
    //student
    createStudent,
    findAllStudents,
    findStudentById,
    updateStudent,
    deleteStudent,

    //question
    createQuestion,
    findAllQuestions,
    findQuestionById,
    deleteQuestion,

    //answer
    answerQuestion,
    deleteAnswer,
    findAnswerById,
    findAllAnswers,
    findAnswersByStudent,
    findAnswersByQuestion,

    populateDatabase,
    truncateDatabase,
};

