let User = require('./../models/user')

exports.create = function(req, res){
	let user = new User()
	user.nama = req.body.nama
	user.email = req.body.email
  	user.password = req.body.password
	user.save(function(err, user){
		if(err)
			res.send(err)
		res.json({"nama":req.body.nama,"email":req.body.email})
	})
}

exports.getAll = function(req, res){
	User.find(function(err, user) {
		if (err)
			res.send(err)
		console.log(err)
		res.json(user)
 })
}

exports.findByName = function(req, res){
	User.findOne(req.params.nama, function(err, user){
		if (err)
			res.send(err)
		res.json(user)
 })
}

exports.dropDb = function(req,res){
	User.remove({"nama":req.body.nama}, function(err){
		if(err)
			res.send(err)
		console.log(err)
		res.json({"Status":"200", "Keterangan":"Success"})
	})
}