
function send(email, subject, text, callback) {
	console.log("Sending "+ text + " to "+ email)

	if(callback) {
		callback
	}
}


exports.send = send