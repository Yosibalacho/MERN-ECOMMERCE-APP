const router = require('express').Router()
const {
    getOrder,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
} = require('../controllers/orders-ctrl')

router.get('/',getOrder)
router.get('/getOrderById/:id', getOrderById)
router.post('/createOrder', createOrder)
router.put('/updateOrder/:id', updateOrder)
router.delete('/deleteOrder', deleteOrder)

module.exports = router;