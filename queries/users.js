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
              users(name, email, username, password, is_vegan, restrictions, date_joined)
             VALUES
               ($1, $2, $3, $4, $5, $6, $7)
             RETURNING *;`,
      [
        user.name,
        user.email,
        user.username,
        user.password,
        user.is_vegan,
        user.restrictions,
        user.date_joined,
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
      `UPDATE users SET name=$1, email=$2, username=$3, password=$4, is_vegan=$5, restrictions=$6, date_joined=$7 WHERE id=$8 RETURNING *; `,
      [
        user.name,
        user.email,
        user.username,
        user.password,
        user.is_vegan,
        user.restrictions,
        user.date_joined,
        id,
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
