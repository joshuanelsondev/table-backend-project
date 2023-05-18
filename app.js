// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONTROLLERS
const usersController = require('./controllers/userController');
const dishesController = require('./controllers/dishesController');
const userDishesController = require('./controllers/userDishesController');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Table App");
});


app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});
app.use('/users', usersController);
app.use('/dishes', dishesController);
app.use('/userDishes', userDishesController)

module.exports = app;