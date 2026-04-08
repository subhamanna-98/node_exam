

const express = require('express')
const studentController = require('../controller/student.controller')
const router = express.Router()

router.post('/create',studentController.createStudent)
router.get('/get',studentController.getStudent)

router.get('/student/edit/:id',studentController.getStudentById)
router.put('/student/update/:id',studentController.updateStudentById)
router.delete('/student/delet/:id',studentController.deleteStudentBy)


module.exports = router