const express = require('express');
const userDishes = express.Router();

const {
  getAllFavoriteDishes,
  getAllDislikedDishes,
  addFavoriteDish,
  updateFavoriteDish,
} = require("../queries/user_dishes");


// Get all favorite dishes
userDishes.get('/favorites', async (req, res) => {
  const { error, userDishesFavs } = await getAllFavoriteDishes();
  if (error) {
    return res.status(500).json({ error: error.message });
  } else {
    return res.status(200).json({ userDishesFavs });
  }
});

// Get all disliked dishes
userDishes.get('/disliked', async (req, res) => {
  const { error, userDishesDisliked } = await getAllDislikedDishes();
  if (error) {
    return res.status(500).json({ error: error.message });
  } else {
    return res.status(200).json({ userDishesDisliked });
  }
});

// Add to favorites
// userDishes.get('/add-favorite', async (req, res) => {

//   const { error, addToFav } = await addFavoriteDish();
//   if (error) {
//     return res.status(500).json({ error: error.message });
//   } else {
//     return res.status(200).json({ userDishesDisliked });
//   }
// });


module.exports = userDishes;
