var redis = require('./connection').connection;


exports.send  =function(req, res){
	var user = req.params.user
	var text = req.params.text

	redis.get(user, function(err, reply) {
		var email = reply

		if(email) {
			console.log("Sending "+ text + " to "+ email)
			res.send("ok")
		} else {
			console.log("No email set for "+ user)
			res.send("ok")
		}



  });
}