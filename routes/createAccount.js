var express = require('express');
var router = express.Router();
var fs = require('fs');
const bcrypt = require('bcryptjs');
const { Database } = require('sqlite3');
var databaseFunction = require("../database_functions.js");

function hashFunction(password) {
    return bcrypt.hash(password, 10);
}

/* GET home page. */
router.post('/', async function(req, res) {
    
    var username = req.body.username;
    const hashedPassword = await hashFunction(req.body.password);

    console.log(username + " " + hashedPassword);

    // let data = JSON.stringify([{username: username, password: hashedPassword}]);
    // fs.writeFileSync('users.json', data);

    var theFile = fs.readFileSync('users.json');
    var theFileAsJSON = JSON.parse(theFile);
    let data = {username: username, password: hashedPassword};
    theFileAsJSON.push(data);
    let theFileAsJSONAsString = JSON.stringify(theFileAsJSON);
    fs.writeFileSync('users.json', theFileAsJSONAsString);

    let user = [{
        username: req.body.username,
        password: hashedPassword
    }];
    databaseFunction.createUser(user);

    res.render('AccountCreated');
});

module.exports = router;
