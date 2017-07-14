var express = require('express');
var bodyParser = require('body-parser');

var userController = require('./userController');
var messageController = require('./messageController');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded());         


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// app.get('/', function(request, response) {
//   response.render('pages/index');
// });

app.get ('/:user/', userController.getUser);
app.post('/:user/', userController.newUser);
app.get('/:user/:text(*)', messageController.send);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


