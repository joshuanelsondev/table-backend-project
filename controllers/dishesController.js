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
  const allDishes = await getAllDishes();

  if (allDishes.error) {
    return res.status(500).json({ error: error.message });
  } else {
    return res.status(200).json(allDishes);
  }
}
)

// SHOW
dishes.get('/:id', async (req, res) => {
  const { id } = req.params
  const dish = await getDish(id)
  if (dish.error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ dish })
  }
}
)

// CREATE
dishes.post('/', async (req, res) => {
  const dish = req.body
  const createdDish = await createDish(dish)
  if (createdDish.error) {
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
  const updatedDish = await updateDish(id, dish)
  if (updatedDish.error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ updatedDish })
  }
}
)

// DELETE
dishes.delete('/:id', async (req, res) => {
  const { id } = req.params
  const deletedDish = await deleteDish(id)
  if (deletedDish.error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ deletedDish })
  }
}
)

module.exports = dishes;







