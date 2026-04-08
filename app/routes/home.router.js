

const express = require('express')
const homeController = require('../controller/home.controller')

const router = express.Router()

router.get('/home',homeController.home)



module.exports = router