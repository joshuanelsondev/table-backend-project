const db = require("../db/dbConfig");

const getAllFavoriteDishes = async () => {
    try {
        const favoriteDishes = await db.any(
            `SELECT dishes.*
             FROM dishes
             JOIN user_dishes ON dishes.id = user_dishes.dish_id
             WHERE user_dishes.user_id = user_id AND user_dishes.type = 'favorite';`
        );
        return favoriteDishes;
    } catch (error) {
        return { error: error };
    }
};

const getAllDislikedDishes = async () => {
  try {
    const dislikedDishes = await db.any(
      `SELECT dishes.*
       FROM dishes
       JOIN user_dishes ON dishes.id = user_dishes.dish_id
       WHERE user_dishes.user_id = user_id AND user_dishes.type = 'disliked';`
    );
    return dislikedDishes;
  } catch (error) {
    return { error: error };
  }
};

const addFavoriteDish = async (user, dish) => {
    try {
        const favoriteDish = await db.one(
            `INSERT INTO
              user_dishes(user_id, dish_id, type)
             VALUES
              ($1, $2, 'favorite')
             RETURNING *;`,
             [user.id, dish.id]
        );
        return favoriteDish;
    } catch (error) {
        return { error: error }
    }
};

const updateFavoriteDish = async (user, dish) => {
  try {
    const updatedDish = await db.none(
      `UPDATE user_dishes
       SET type = 'dislike'
       WHERE user_id = $1 AND dish_id = $2;`,
      [user_id, dish_id]
    );
    return updatedDish;
  } catch (error) {
    return { error: error };
  }
};

module.exports = {
    getAllFavoriteDishes,
    getAllDislikedDishes,
    addFavoriteDish,
    updateFavoriteDish
};