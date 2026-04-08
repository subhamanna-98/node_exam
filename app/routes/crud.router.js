

const express = require('express')
const crudController = require('../controller/crud.controller')
const router = express.Router()

router.get('/show',crudController.show)
router.get('/add',crudController.create)
router.post('/store',crudController.store)
router.get('/edit/:id',crudController.Edit)
router.post('/update/:id',crudController.update)
router.get('/delet/:id',crudController.delet)
router.get('/soft/delete/:id',crudController.softDelet)
router.get('/trash',crudController.trash)
router.get('/restore/:id',crudController.recover)


module.exports = router