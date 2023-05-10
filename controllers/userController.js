const express = require('express');
const users = express.Router();

const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser
} = require('../queries/users');

// INDEX
users.get('/', async (req, res) => {
  const { error, users } = await getAllUsers()

  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ users })

  }
})

// SHOW
users.get('/:id', async (req, res) => {
  const { id } = req.params
  const { error, user } = await getUser(id)
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ user })
  }
}
)

// CREATE
users.post('/', async (req, res) => {
  const user = req.body
  const { error, createdUser } = await createUser(user)
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ createdUser })
  }
}
)

// UPDATE
users.put('/:id', async (req, res) => {
  const { id } = req.params
  const user = req.body
  const { error, updatedUser } = await updateUser(id, user)
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ updatedUser })
  }
}
)

// DELETE
users.delete('/:id', async (req, res) => {
  const { id } = req.params
  const { error, deletedUser } = await deleteUser(id)
  if (error) {
    return res.status(500).json({ error: error.message})
  }else{
    return res.status(200).json({ deletedUser })
  }
}
)

module.exports = users;





