var redis = require('./connection').connection;

if(process.env.SENDGRID_API_KEY) {
	var emailController = require('./emailController')
} else {
	var emailController = require('./emailControllerMockup')
}

exports.send  =function(req, res){
	var user = req.params.user
	var text = req.params.text

	redis.get(user, function(err, reply) {
		var email = reply

		if(email) {
			emailController.send(email, text, text, function(err, res) {
				console.log("callback")
			})
			res.send("ok")
		} else {
			console.log("No email set for "+ user)
			res.send("ok")
		}



  });
}