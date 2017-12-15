const router = require('express').Router()
const {
  getMatches,
  getTeams,
  getRounds,
  getMatchDetail
} = require('../controllers/scoreCtrl')

router.get('/matches', getMatches)
router.get('/teams', getTeams)
router.get('/rounds', getRounds)
router.get('/match', getMatchDetail)
module.exports = router
