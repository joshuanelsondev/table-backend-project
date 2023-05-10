// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONTROLLERS
const usersController = require('./controllers/userController');
const dishesController = require('./controllers/dishesController');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Table App");
});

app.use('/users', usersController);
app.use('/dishes', dishesController);

module.exports = app;