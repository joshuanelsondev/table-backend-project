const db = require("../db/dbConfig");

const getAllUsers = async () => {
  try {
    const users = await db.any("SELECT * FROM users");
    return { users };
  } catch (error) {
    return { error: error };
  }
};
const getUser = async (id) => {
  try {
    const user = await db.any("SELECT * FROM users WHERE id=$1", id);
    return { user };
  } catch (error) {
    return { error: error };
  }
};
const createUser = async (user) => {
  try {
    const createdUser = await db.one(
      `INSERT INTO
              users(name, calorie, is_vegan, category, image_url, portions)
             VALUES
               ($1, $2, $3, $4, $5, $6)
             RETURNING *;`,
      [
        user.name,
        user.calorie,
        user.is_vegan,
        user.category,
        user.image_url,
        user.portions
      ]
    );
    return { createdUser };
  } catch (error) {
    return { error: error };
  }
};
const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one(
      `DELETE FROM users WHERE id=$1 RETURNING *`,
      id
    );
    return { deletedUser };
  } catch (error) {
    return { error: error };
  }
};
const updateUser = async (id, user) => {
  try {
    const updatedUser = await db.one(
      `UPDATE users SET name=$1, calorie=$2, is_vegan=$3, category=$4, image_url=$5, portions=$6 WHERE id=$7 RETURNING *;`,
      [
        user.name,
        user.calorie,
        user.is_vegan,
        user.category,
        user.image_url,
        user.portions,
        id
      ]
    );
    return updatedUser;
  } catch (error) {
    return { error: error };
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
