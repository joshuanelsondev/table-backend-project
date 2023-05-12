const db = require("../db/dbConfig");

const getAllDishes = async () => {
    try {
        const dishes = await db.any("SELECT * FROM dishes");
        return { dishes };
    } catch (error) {
        return { error: error };
    }
};
const getDish = async (id) => {
    try {
        const dish = await db.any("SELECT * FROM dishes WHERE id=$1", id);
        return { dish };
    } catch (error) {
        return { error: error };
    }
};
const createDish = async (dish) => {
    try {
        const createdDish = await db.one(
          `INSERT INTO
              dishes(name, calories, is_vegan, category, image_url, portions)
             VALUES
               ($1, $2, $3, $4, $5, $6)
             RETURNING *;`,
          [
            dish.name,
            dish.calories,
            dish.is_vegan,
            dish.category,
            dish.image_url,
            dish.portions,
          ]
        );
        return { createdDish };
    } catch (error) {
        return { error: error };
    }
};
const deleteDish = async (id) => {
    try {
        const deletedDish = await db.one(
            `DELETE FROM dishes WHERE id=$1 RETURNING *`, id
        );
        return { deletedDish };
    } catch (error) {
        return { error: error };
    }
};
const updateDish = async (id, dish) => {
    try {
        const updatedDish = await db.one(
          `UPDATE dishes SET name=$1, calories=$2, is_vegan=$3, category=$4, image_url=$5, portions=$6 WHERE id=$7 RETURNING *;`,
          [
            dish.name,
            dish.calories,
            dish.is_vegan,
            dish.category,
            dish.image_url,
            dish.portions,
            id,
          ]
        );
        return updatedDish;
    } catch (error) {
        return { error: error };
    }
};

module.exports = {
    getAllDishes,
    getDish,
    createDish,
    deleteDish,
    updateDish
};