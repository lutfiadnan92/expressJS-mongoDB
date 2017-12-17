//basic configuration
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let config = require('./app/config/database')
let port = process.env.PORT || 3000;

//connect to database mongodb
mongoose.connect(config.database,{
	useMongoClient : true
})

//configure app to use bodyparser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//register routes
let apiRouter = require('./app/routes.js') (app, express)
app.use('/api/v1', apiRouter)

//start the server
app.listen(port)
console.log('server running on port ' + port)