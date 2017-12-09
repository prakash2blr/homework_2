"use strict";
const bodyParser = require('body-parser'),
	  authenticate = require("./authenticate"),
	  user = require("./user");

module.exports=function(app){

	app.use(bodyParser.json());
	app.use('/api/authenticate',authenticate);
	app.use('/api/user',user);

};