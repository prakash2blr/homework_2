# This is simple example for microservice with express and JWT Using Mysql

# Steps to install (run following commands)

1) npm install
2) export/set NODE_ENV="your secret key" (Command depends on your OS)
3) from migrations folder import schema.sql
4) from migrations folder import poplulate.sql
5) change values in db.js in db folder
3) grunt (for build and quality checks)
4) npm start

# API
1) Open your favourite rest client and use below details to Authenticate User.
	<ul>
		<li>URL : `http://<domain>:port(default is 3001 )/api/authenticate`</li>
		<li>Method : POST</li>
		<li>Payload : <br />{<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"userid":"id from DB",<br />
			}
		</li>
		<li>Response : Auth token</li>
	</ul>
2) Open your favourite rest client and use below details to get User.
	<ul>
		<li>URL : `http://<domain>:port(default is 3001 )/api/user`</li>
		<li>Method : GET</li>
		<li>Header : `Authorization : Bearer [auth token from authenticate api]`</li>
		<li>Response : User object<br/>
		&nbsp;&nbsp;for example : <br />
		  &nbsp;&nbsp;&nbsp;&nbsp;{<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"userId": "1",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"jobTitleName": "Developer",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"firstName": "Romin",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"lastName": "Irani",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"preferredFullName": "Romin Irani",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"employeeCode": "E1",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"region": "CA",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phoneNumber": "408-1234567",<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"emailAddress": "romin@gmail.com"<br />
		&nbsp;&nbsp;&nbsp;&nbsp;}
		</li>
	</ul>
3) Open your favourite rest client and use below details to Create user.
	<ul>
		<li>URL : `http://<domain>:port(default is 3001 )/api/user`</li>
		<li>Method : POST</li>
		<li>Payload : <br />{<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name":"name",<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email":"email"<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"title":"title",<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"empcode":"empcode"<br />
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"phone":"phone"<br />		
			}
		</li>
		<li>Response : Response Text</li>
	</ul>

4) Open your favourite rest client and use below details to Update user.
	<ul>
		<li>URL : `http://<domain>:port(default is 3001 )/api/user`</li>
		<li>Method : PUT</li>
		<li>Header : `Authorization : Bearer [auth token from authenticate api]`</li>
		<li>Response : Response Text</li>
	</ul>

5) Open your favourite rest client and use below details to Delete user.
	<ul>
		<li>URL : `http://<domain>:port(default is 3001 )/api/user`</li>
		<li>Method : DELETE</li>
		<li>Header : `Authorization : Bearer [auth token from authenticate api]`</li>
		<li>Response : Response Text</li>
	</ul>

### Update is dummy API<br />
