const express = require('express');
const users = express.Router();

const {
  getAllDishes,
  getDish,
  createDish,
  deleteDish,
  updateDish
} = require('../queries/dishes');

// INDEX
users.get('/', async (req, res) => {
  const { error, dishes } = await getAllDishes()
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ dishes })

  }
})

// SHOW
users.get('/:id', async (req, res) => {
  const { id } = req.params
  const { error, dish } = await getDish(id)
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ dish })
  }
}
)

// CREATE
users.post('/', async (req, res) => {
  const dish = req.body
  const { error, createdDish } = await createDish(dish)
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ createdDish })
  }
}
)

// UPDATE
users.put('/:id', async (req, res) => {
  const { id } = req.params
  const dish = req.body
  const { error, updatedDish } = await updateDish(id, dish)
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ updatedDish })
  }
}
)

// DELETE
users.delete('/:id', async (req, res) => {
  const { id } = req.params
  const { error, deletedDish } = await deleteDish(id)
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ deletedDish })
  }
}
)

module.exports = users;





