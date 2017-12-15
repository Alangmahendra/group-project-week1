

const router = require('express').Router()
const {
  getImages
} = require('../controllers/imageSearchCtrl')

router.get('/search', getImages)


module.exports = router
