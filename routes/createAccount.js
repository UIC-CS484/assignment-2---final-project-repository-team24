var express = require('express');
var router = express.Router();
var fs = require('fs');
const bcrypt = require('bcryptjs');

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

    res.render('AccountCreated');
});

module.exports = router;
