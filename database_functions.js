var sqlite3 = require('sqlite3').verbose() //npm install sqlite3
const bcrypt = require('bcryptjs');

//Creating a new database instance - Indication of connected database
//Before peforming any operations to database, make sure database is connected.
let db = new sqlite3.Database('./theDatabase.sqlite', (err) => {
	if (err) {
	  // Cannot open database
	  console.error(err.message)
	  throw err
	}else{
		//Successful database connection
		console.log('Connected to the SQLite database.') 	
	}
	//db.run("CREATE TABLE ? (? STRING, ? STRING, PRIMARY KEY(?))", ["PROSPECTIVE_USER", "username", "password", "username"]);
	db.run("CREATE TABLE PROSPECTIVE_USER (username STRING, password STRING, PRIMARY KEY(username))");
});

let createUser = (user) =>{
	var createUserSql ='INSERT INTO PROSPECTIVE_USER (username, password) VALUES (?,?)'
	var params =[user.username, user.password];

	db.run(createUserSql, params, function(err){
		if (err){
			return console.log(err.message);
		}
		console.log("User Created");
		console.log(`Rows inserted ${this.changes}`);	  
	});
}

module.exports = {createUser};