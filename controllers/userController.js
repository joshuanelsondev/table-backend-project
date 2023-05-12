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
  const users  = await getAllUsers()

  if (users.error) {
    return res.status(500).json({ error: "server error"})
  }else{
    return res.status(200).json({ users })

  }
})

// SHOW
users.get('/:id', async (req, res) => {
  const { id } = req.params
  const  user = await getUser(id)
  if (user.error) {
    return res.status(500).json({ error: "server error"})
  }else{
    return res.status(200).json({ user })
  }
}
)

// CREATE
users.post('/', async (req, res) => {
  const user = req.body
  const createdUser = await createUser(user)
  if (createdUser.error) {
    return res.status(500).json({ error: "server error"})
  }else{
    return res.status(200).json({ createdUser })
  }
}
)

// UPDATE
users.put('/:id', async (req, res) => {
  const { id } = req.params
  const user = req.body
  const updatedUser = await updateUser(id, user)
  if (updatedUser.error) {
    return res.status(500).json({ error: "server error"})
  }else{
    return res.status(200).json({ updatedUser })
  }
}
)

// DELETE
users.delete('/:id', async (req, res) => {
  const { id } = req.params
  const deletedUser = await deleteUser(id)
  if (deletedUser.error) {
    return res.status(500).json({ error: "server error"})
  }else{
    return res.status(200).json({ deletedUser })
  }
}
)

module.exports = users;





