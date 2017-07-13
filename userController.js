if (process.env.REDISTOGO_URL) {
  var rtg   = require("url").parse(process.env.REDISTOGO_URL);
  var redis = require("redis").createClient(rtg.port, rtg.hostname);

  redis.auth(rtg.auth.split(":")[1]);
} else {
    var redis = require("redis").createClient();
}

exports.newUser =function(req, res){
	var user = req.params.user
  var email = req.body.email_name;
  // console.log(user)
  // console.log(email)
  redis.set(user, email, function(err, reply) {
    console.log(email);
  });
  
   res.send("ok");
};

exports.getUser = function(req, res) {
  var user = req.params.user
  console.log(user)  
  redis.get(user, function(err, reply) {
    console.log(reply);
  });
  res.render('pages/userinfo');

}