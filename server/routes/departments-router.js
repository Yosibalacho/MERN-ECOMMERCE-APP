
const router = require('express').Router()
const {
    getDepartment,
     createDepartment,
     updateDepartment,
     getDepartmentById,
     deleteDepartment
} = require('../controllers/departments-ctrl')

router.get('/',getDepartment)
router.post('/createDepartment', createDepartment)
router.get('/getDepartmentById/:id', getDepartmentById)
router.put('/updateDepartment/:id', updateDepartment)
router.delete('/deleteDepartment', deleteDepartment)

module.exports = router;