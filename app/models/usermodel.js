"use strict";
const db = require('../db/db');

class UserModel{
	constructor(){
		db.createConnectionPool();
		this.getUserDetails = function (userid,email) {
			let query="SELECT * FROM emp_users WHERE id = ?";
			return new Promise(function(resolve, reject) { 
				db.executeQuery(query,[userid],function(err,res){
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
		this.createUser = function (userObj) {
			let query="INSERT INTO emp_users SET ?";
			console.log(query);
			return new Promise(function(resolve, reject) { 
				db.executeQuery(query,userObj,function(err,res){
					if(err){
						reject(err);
					}
					resolve(true);
				});
			});
		};
		this.getUserById = function (userid) {
			let query="SELECT * FROM emp_users WHERE id = ?";
			return new Promise(function(resolve, reject) { 
				db.executeQuery(query,[userid],function(err,res){
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
		this.updateByUserId = function (updateObj,userid) {
			let query="UPDATE emp_users SET ? WHERE id = ?";
			return new Promise(function(resolve, reject) { 
				db.executeQuery(query,[userid],function(err,res){
					if(err){
						reject(err);
					}
					if(err){
						reject(err);
					}
					resolve(true);
				});
			});
		};
		this.deleteByUserId = function (userid) {
			let query="DELETE FROM emp_users WHERE id = ?";
			return new Promise(function(resolve, reject) { 
				db.executeQuery(query,[userid],function(err,res){
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
	}
}
module.exports = UserModel;