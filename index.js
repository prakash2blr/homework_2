"use strict";
const express = require("express"),
	  request = require("request"),
	  bodyParser = require('body-parser'),
	  jwt = require("jwt-simple"),	  
	  router = express.Router(),
	  app = express(),
	  port = process.env.PORT || 3001,
	  middleWare = require("./app/middleware"),
	  user = require("./app/controllers")(app);

app.use(bodyParser.json());

app.listen(port);