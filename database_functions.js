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
});


let createProfile = (profile) =>{
	var createProfileSql ='INSERT INTO PROSPECTIVE_PROFILE (prof_id, prof_firstname,prof_lastname, prof_address, prof_decision_date, prof_email, prof_password, prof_phone, prof_rent_range, prof_image_url, prof_class_num) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
	var params =[null, profile.firstName, profile.lastName, null, profile.move_date, profile.userEmail, profile.user_password, null, profile.user_rent_range, './images/user_profile_images/generic_profile_img.png', null];

	db.run(createProfileSql, params, function(err){
		if (err){
			return console.log(err.message);
		}
		console.log("Profile Created");
		console.log(`Rows inserted ${this.changes}`);	  
	});
}