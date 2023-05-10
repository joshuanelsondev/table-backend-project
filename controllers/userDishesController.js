const express = require('express');
const userDishes = express.Router();

const {
  getAllUserDishes,
  getUserDish,
  createUserDish,
  deleteUserDish,
  updateUserDish
} = require('../queries/userDishes');

// INDEX
userDishes.get('/', async (req, res) => {
  const { error, userDishes } = await getAllUserDishes()
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ userDishes })

  }
}
)

// SHOW
userDishes.get('/:id', async (req, res) => {
  const { id } = req.params
  const { error, userDish } = await getUserDish(id)
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ userDish })
  }
}
)

// CREATE
userDishes.post('/', async (req, res) => {
  const userDish = req.body
  const { error, createdUserDish } = await createUserDish(userDish)
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ createdUserDish })
  }
}
)

// UPDATE
userDishes.put('/:id', async (req, res) => {
  const { id } = req.params
  const userDish = req.body
  const { error, updatedUserDish } = await updateUserDish(id, userDish)
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ updatedUserDish })
  }
}
)

// DELETE
userDishes.delete('/:id', async (req, res) => {
  const { id } = req.params
  const { error, deletedUserDish } = await deleteUserDish(id)
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ deletedUserDish })
  }
}
)

module.exports = userDishes;
