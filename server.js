var mongoose = require('mongoose');
var express = require('express');
var app = express();

var resumesRouter = require(__dirname + '/routes/resume_routes');
var usersRouter = require(__dirname + '/routes/user_routes');

process.env.APP_SECRET = process.env.APP_SECRET || 'somethingelse';
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://heroku_8j4lqmhv:6artmsqdrr9uamguvdepgrpij4@ds033135.mongolab.com:33135/heroku_8j4lqmhv');

app.use(express.static(__dirname + '/build/'));
app.use('/api', resumesRouter);
app.use('/api', usersRouter);

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Server up & running on port: ' + port +"!!");
});
