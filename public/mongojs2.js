//Import the mongoose module
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string          : String,
    a_date            : Date
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database3';
mongoose.connect(mongoDB, {
    useMongoClient: true
    /* other options */
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

SomeModel.create({ name: 'also_awesome' }, function (err, awesome_instance) {
    if (err) return handleError(err);
    // saved!
});

db.close();
