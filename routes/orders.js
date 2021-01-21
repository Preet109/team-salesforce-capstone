const express = require('express');
const router = express.Router();
const Order = require('../models/Order');


router.post('/', async (req,res)=>{
    const order = new Order({
        customer_name: req.body.customer_name,
        customer_contact: req.body.customer_contact,
        item_list: req.body.item_list,
        total_price: req.body.total_price
    });
    try{
        const savedOrder = await order.save();
        res.json(savedOrder);
    }catch (err){
        res.json({message: err});
    }
});

//get all orders
router.get('/all', async (req, res)=>{
    try{
        const items = await Order.find(); 
    }catch (err){
        res.json({message: err});
    }
});// runs on Postman, no error but stuck on sending request

//get order by id
router.get('/:orderId', async (req, res)=>{
    try{
        const order = await Order.findById(req.params.orderId);
        res.json(order); 
    }catch (err){
        res.json({message: err});
    }
});

//delete and order
router.delete('/:orderId', async (req,res)=>{
    try{
        const removedOrder = await Order.deleteOne({_id: req.params.orderId});
        res.json(removedOrder);
    }catch (err){
        res.json({message: err});
    }
});
module.exports = router;