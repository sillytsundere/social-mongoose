//import express
const express = require('express');
//import connection file to connect to database
const db = require('./config/connection');
//import route file so middleware will direct to routes
const routes = require('./routes');

//declare port and instance of express
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//connect to the database
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});