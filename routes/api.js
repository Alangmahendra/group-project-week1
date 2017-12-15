const express = require('express')
const router = express.Router()
const { cekToken } = require('../middlleware/auth')
const { createUser,
  findById,
  findByIdAndUpdate,
  getAllUsers,
  findByIdAndRemove,
  login
  } = require('../controllers/userCtrl.js')


// ================= login
router.post('/login', login)

// ================= users 
router.post('/users', createUser)

router.get('/users/:email', findById)

router.put('/users/:id', findByIdAndUpdate)

router.get('/users', getAllUsers)

router.delete('/users/:id', findByIdAndRemove)



module.exports = router