const Order = require('../models/order');
const User = require('../models/user');
const asyncHandler = require('express-async-handler');

const createOrder = asyncHandler(async (req, res) => {
    const {_id} = req.user;
    const userCart = await User.findById(_id).select('cart').populate('cart.product', 'title price');
    const products = userCart?.cart?.map(item => ({
        product: item.product._id,
        count: item.quantity,
        color: item.color
    }))
    const total = userCart?.cart?.reduce((sum, item) => sum + item.product.price*item.quantity, 0);
    const cart = await Order.create({products, total, orderBy: _id});
    return res.json({
        success: cart ? true:false,
        cart: cart ? cart : 'Somethinh went wrong',
        userCart
    })
})

const updateStatus = asyncHandler(async (req, res) => {
    const {oid} = req.params;
    const {status} = req.body;
    if (!status) throw new Error('Missing status');
    const response = await Order.findByIdAndUpdate(oid, {status}, {new: true});
    console.log(response)
    return res.json({
        success: response ? true:false,
        response: response ? response : 'Something went wrong'
    })
})

const getUserOrder = asyncHandler(async (req, res) => {
    const {_id} = req.user;
    const response = await Order.find({orderBy: _id});
    return res.json({
        success: response ? true:false,
        response: response ? response: 'Cannot get Order'
    })
})

const getOrder = asyncHandler(async (req, res) => {
    const response = await Order.find();
    return res.json({
        success: response ? true:false,
        response: response ? response : 'Something went wrong'
    })
})

module.exports = {
    createOrder,
    updateStatus,
    getUserOrder,
    getOrder
}