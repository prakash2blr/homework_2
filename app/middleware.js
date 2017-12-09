"use strict";
const express = require("express"),
      router = express.Router();
      
router.use(function(req, res, next) {
  	let secretKey = process.env.NODE_ENV,
  		tokenheader = req.headers['authorization'],
  		token,
  		payLoad={},
      requestBody = req.body;
      if(requestBody){
        next();
      }
  		else if(tokenheader){
  			token=tokenheader.split(" ")[1];
	  		payLoad=jwt.decode(token, secretKey, false, 'HS512');
	  		if (payLoad.exp <= Date.now()) {
                return res.status(401).json({
                    error: 'Access token has expired. Please Renew it.'
                });
            }
	  		next();
  		}
  		else{
  			res.status(403).json({
	            error: 'Forbidden: Token does not exists.'
	        });
  		}

});