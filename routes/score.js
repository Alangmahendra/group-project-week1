const router = require('express').Router()
const {
  getMatches,
} = require('../controllers/scoreCtrl')

router.get('/matches', getMatches)
router.get('/teams', getTeams)

module.exports = router
