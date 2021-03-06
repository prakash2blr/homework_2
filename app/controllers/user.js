"use strict";
const express = require("express"),
      router = express.Router(),
      moment = require("moment"),
      jwt = require("jwt-simple"),
	  UserModel = require("../models/usermodel");


router.get("/",function(request,response,next) {
	let secretKey = process.env.NODE_ENV,
	  	tokenheader = request.headers['authorization'],
	  	token,
	  	payLoad={},
	  	userAll,
	  	userDetails,
	  	userid=0;

  		if(tokenheader){
  			token=tokenheader.split(" ")[1];
  			payLoad=jwt.decode(token, secretKey, false, 'HS512');
			if(payLoad.iss){
				userAll = new UserModel();
				userid = payLoad.iss;
				userDetails = userAll.getUserById(userid);
				userDetails.then(function(res){
					let result=JSON.parse(res);
					if(result.id){
						response.status(200).json(result);	
					}
					else{
						response.status(401).send("Not Authorized!!!");
					}

				});
			}
			else{
				response.status(401).send("Not Authorized!!!");
			}
		}
		else{
			response.status(403).json({
	            error: 'Forbidden: Token does not exists.'
	        });
		}
});

router.post("/",function(request,response,next) {
	let requestBody = request.body,
		name = requestBody.name,
		email = requestBody.email,
		title = requestBody.title,
		empcode = requestBody.empcode,
		phone = requestBody.phone,
		userObj={
			"name":name,
			"email":email,
			"job_title":title,
			"employee_code":empcode,
			"phone":phone
		},
		userAll = new UserModel(),

		userDetails = userAll.createUser(userObj);

	response.status(200).json("User Created!!");
});

router.put("/",function(request,response,next) {
		let requestBody = request.body,
			secretKey = process.env.NODE_ENV,
		  	tokenheader = request.headers['authorization'],
		  	token,
		  	payLoad={},
		  	userAll,
		  	userid = requestBody.userid,
		  	name = requestBody.name,
			email = requestBody.email,
			title = requestBody.title,
			empcode = requestBody.empcode,
			phone = requestBody.phone,
			userObj={
				"name":name,
				"email":email,
				"job_title":title,
				"employee_code":empcode,
				"phone":phone
			};
	 	if(tokenheader){
  			token=tokenheader.split(" ")[1];
  			payLoad=jwt.decode(token, secretKey, false, 'HS512');
			if(payLoad.iss){
				userAll = new UserModel();
				userAll.updateByUserId(userObj,userid);
				response.status(200).json(`User ${userid} updated!!!`);	
			}
			else{
				response.status(401).send("Not Authorized!!!");
			}
		}
		else{
			response.status(403).json({
	            error: 'Forbidden: Token does not exists.'
	        });
		}	
});

router.delete("/",function(request,response,next) {
		let requestBody = request.body,
			secretKey = process.env.NODE_ENV,
		  	tokenheader = request.headers['authorization'],
		  	token,
		  	payLoad={},
		  	userAll,
		  	userid = requestBody.userid;
	 	if(tokenheader){
  			token=tokenheader.split(" ")[1];
  			payLoad=jwt.decode(token, secretKey, false, 'HS512');
			if(payLoad.iss){
				userAll = new UserModel();
				userAll.deleteByUserId(userid);
				response.status(200).json(`User ${userid} Deleted!!!`);	
			}
			else{
				response.status(401).send("Not Authorized!!!");
			}
		}
		else{
			response.status(403).json({
	            error: 'Forbidden: Token does not exists.'
	        });
		}
});

module.exports=router;