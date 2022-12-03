
const router = require('express').Router()
const {
    getCategory,
    createCategory,
    updateCategory,
    getCategoryById,
    deleteCategory
} = require('../controllers/categories-ctrl')

router.get('/',getCategory)
router.post('/createCategory', createCategory)
router.get('/getCategoryById/:id', getCategoryById)
router.put('/updateCategory/:id', updateCategory)
router.delete('/deleteCategory', deleteCategory)


module.exports = router;