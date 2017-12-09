"use strict";
const db = require('../db/db');

class UserModel{
	constructor(){
		db.createConnectionPool();
		this.getUserDetails = function (userid,email) {
			let query="SELECT * FROM emp_users WHERE id = "+userid;
			return new Promise(function(resolve, reject) { 
				db.executeQuery(query,function(err,res){
					if(err){
						reject(err);
					}
					if(res.length){
						resolve(JSON.stringify(res[0]));
					}
					else{
						resolve(false);
					}
				});
			});
		};
		this.createUser = function (name,email,empcode,phone,title) {
			let query="INSERT INTO emp_users (name,email,job_title,employee_code,phone)"+
			"VALUES ('"+name+"','"+email+"','"+title+"','"+empcode+"','"+phone+"')";
			console.log(query);
			return new Promise(function(resolve, reject) { 
				db.executeQuery(query,function(err,res){
					if(err){
						reject(err);
					}
					resolve(true);
				});
			});
		};
		this.getUserById = function (userid) {
			let query="SELECT * FROM emp_users WHERE id = "+userid;
			return new Promise(function(resolve, reject) { 
				db.executeQuery(query,function(err,res){
					if(err){
						reject(err);
					}
					if(res.length){
						resolve(JSON.stringify(res[0]));
					}
					else{
						resolve(false);
					}
				});
			});
		};
		this.updateByUserId = function (userid) {
			console.log("User Update API was called");
			return "User Updated";
		};
		this.deleteByUserId = function (userid) {
			console.log("User Delete API was called");
			return "User Deleted";
		};				
	}
}
module.exports = UserModel;