let mongoose = require('mongoose')
let Schema = mongoose.Schema

//create schema model user
let userSchema = new Schema({
	nama: String,
	email: String,
	password: String
})

//export the schema model user
module.exports = mongoose.model('users', userSchema)
