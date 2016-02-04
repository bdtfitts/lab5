var data = require("../data.json");

exports.addFriend = function(req, res) {
	// Your code goes here
	var name = req.query.name;
	var description = req.query.description;
	var imageURL = "http://www.lorempixel.com/500/500/people"
	var person = {
		'name': name,
		'description': description,
		'imageURL': imageURL
	}
	console.log(person);
	data["friends"].push(person);
	res.render('add');
}