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
              dishes(name, email, username, password, is_vegan, restrictions, date_joined)
             VALUES
               ($1, $2, $3, $4, $5, $6, $7)
             RETURNING *;`, 
             [dish.name, dish.email, dish.username, dish.password, dish.is_vegan, dish.restrictions, dish.date_joined]
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
          `UPDATE dishes SET name=$1, email=$2, username=$3, password=$4, is_vegan=$5, restrictions=$6, date_joined=$7 WHERE id=$8 RETURNING *;`,
          [
            dish.name,
            dish.email,
            dish.username,
            dish.password,
            dish.is_vegan,
            dish.restrictions,
            dish.date_joined,
            id
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