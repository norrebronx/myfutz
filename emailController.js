var helper = require('sendgrid').mail;

var from_email = new helper.Email(process.env.SENDGRID_FROM);

function send(email, subject, text, callback) {
	console.log("Sending "+ text + " to "+ email)

	var to_email = new helper.Email(email);
	var content = new helper.Content('text/plain', text);
	var mail = new helper.Mail(from_email, subject, to_email, content);

	var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON(),
	});

	sg.API(request, function(error, response) {
	  console.log(response.statusCode);
	  console.log(response.body);
	  console.log(response.headers);
	});

	if(callback) {
		callback
	}
}

exports.send = send