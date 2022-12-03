const router = require('express').Router()
const {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products-ctrl')

router.get('/',getProduct)
router.get('/getProductById/:id', getProductById)
router.post('/createProduct', createProduct)
router.put('/updateProduct/:id', updateProduct)
router.delete('/deleteProduct', deleteProduct)

module.exports = router;