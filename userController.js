var redis = require('./connection').connection;


exports.newUser =function(req, res){
	var user = req.params.user
  var email = req.body.email_name;
  redis.set(user, email, function(err, reply) {
    if(err) {
      res.send("error");
    } else {
      res.send("ok");  
    }
  });
};

exports.getUser = function(req, res) {
  var user = req.params.user

  redis.get(user, function(err, reply) {
    res.render('pages/userinfo', {
      email: reply
    });
  });
}