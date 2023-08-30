//import controllers
const profileController = require('../controllers/profileController.js')

// router
const router = require('express').Router()



router.post('/addProfile',profileController.addProfile);


module.exports = router