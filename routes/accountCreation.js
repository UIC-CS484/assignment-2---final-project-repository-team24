var express = require('express');
var router = express.Router();
var fs = require('fs');
//var fetch = require('node-fetch')
//import fetch from 'node-fetch'
var fetch  = require('node-fetch')

/* GET home page. */
router.get('/', function(req, res) {
    res.render('AccountCreation');
});

module.exports = router;


fetch('https://api.openweathermap.org/data/2.5/onecall?lat=00.00&lon=00.00&&appid=')
.then(response => response.json())
.then(json => console.log(json))
