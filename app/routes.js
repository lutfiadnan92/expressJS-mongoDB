let express = require ('express')
let user = require('./controller/userController')

module.exports = function(app, express){
	let router = express()

//api/v1/user
router.route('/user').get(user.getAll)

//api/v1/user/create
router.route('/user/create').post(user.create)

//api/v1/user/name
router.route('/user/:nama').get(user.findByName)

//api/v1/user/delete
router.route('/user/delete').delete(user.dropDb)


return router
};