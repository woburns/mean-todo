// server.js

// set up ========================
var mongojs = require('mongojs');                     // mongoose for mongodb

// configuration =================

console.log("starting");
db = mongojs('myappdatabase');

db.users.save({email: "srirangan@gmail.com", password: "iLoveMongo", sex: "male"}, function(err, saved) {
    if( err || !saved ) console.log("User not saved");
    else console.log("User saved");

});
db.close();