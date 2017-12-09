var mysql = require('mysql');
module.exports = {
	
	createConnectionPool: function(){
		if(!this.pool){
			this.pool  = mysql.createPool({
			   connectionLimit : 10,
			   host     : '',
			   user     : '',
			   password : '',
			   database : ''
			});
		}
		
	},	

	executeQuery: function(query, callback){
		this.pool.getConnection(function(err, connection) {
			  if(err){
			  	return console.log('error in getting connection from pool:', err);
			  }
		 	connection.query(query, function (error, results, fields) {
				if(error){
				   	return callback(error);
				}
				callback(null, results);
			});
		});
	}
};