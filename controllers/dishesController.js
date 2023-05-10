const express = require('express');
const dishes = express.Router();

const {
  getAllDishes,
  getDish,
  createDish,
  deleteDish,
  updateDish
} 
= require('../queries/dishes');

// INDEX
dishes.get('/', async (req, res) => {
  const { error, dishes } = await getAllDishes()
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ dishes })

  }
}
)

// SHOW
dishes.get('/:id', async (req, res) => {
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
dishes.post('/', async (req, res) => {
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
dishes.put('/:id', async (req, res) => {
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
dishes.delete('/:id', async (req, res) => {
  const { id } = req.params
  const { error, deletedDish } = await deleteDish(id)
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ deletedDish })
  }
}
)

module.exports = dishes;







