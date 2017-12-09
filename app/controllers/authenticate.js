"use strict";
const express = require("express"),
      router = express.Router(),
      moment = require("moment"),
      jwt = require("jwt-simple"),
	  UserModel = require("../models/usermodel");

router.post("/",function(request,response,next) {
	let requestBody = request.body,
		userid = requestBody.userid,
		userAll = new UserModel(),
		userDetails = userAll.getUserDetails(userid),
		expires,
		payload,
		token,
		secretKey;
		userDetails.then(function(res){
			let result=JSON.parse(res);
			if(result.id){
				expires = moment().add(1,'days').valueOf();
	    		payload = { 
	    				iss: result.id,
			            exp: expires
			          };
				secretKey = process.env.NODE_ENV;
				token = jwt.encode(payload, secretKey, 'HS512');
				response.status(200).send(token);
			}
			else{
				response.status(401).send("Not Authorized!!!");
			}

		});
});


module.exports=router;