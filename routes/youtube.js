const router = require('express').Router()
const Youtube = require('../controllers/youtubeCtrl');


router.get('/search',Youtube.search)

module.exports = router
