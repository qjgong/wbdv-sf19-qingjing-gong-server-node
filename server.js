var express = require('express')
var app = express()


var universityService = require(
    '../services/university.service.server.js')
universityService(app)

app.listen(3000)
