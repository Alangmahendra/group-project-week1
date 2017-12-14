const express = require('express')
const router = express.Router()
const { createUser,
  findById, 
  findByIdAndUpdate,
  getAllUsers,
  findByIdAndRemove
  } = require('../controllers/userCtrl.js')


// ================= users 
router.post('/users', createUser)

router.get('/users/:email', findById)

router.put('/users/:id', findByIdAndUpdate)

router.get('/users', getAllUsers)

router.delete('/users/:id', findByIdAndRemove)

// ============== api Live Scrore

router.get('/score', )

module.exports = router