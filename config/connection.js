//import mongoose and deconstruct connection variables
const { connect, connection } = require('mongoose');

//connect to database
connect('mongodb://127.0.0.1:27017/sillyDB');

//export connection variable
module.exports = connection;