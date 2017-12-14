const router = require('express').Router()
const {
  getMatches,
} = require('../controllers/scoreCtrl')

router.get('/matches', getMatches)


module.exports = router
