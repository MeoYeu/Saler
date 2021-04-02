import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderPlace.js'
import { isAuth } from '../ultils.js';

const orderPlaceRouter=express.Router();
orderPlaceRouter.post('/',isAuth,
expressAsyncHandler(async(req,res)=>{
    if(req.body.orderItems.length===0){
        res.status(400).send({message:'Cart is empty'})
    }else{
        const order=new Order({
            orderItems:req.body.orderItems,
            shippingAddress:req.body.shippingAddress,
            paymentMethod:req.body.paymentMethod,
            itemsPrice:req.body.itemsPrice,
            shippingPrice:req.body.shippingPrice,
            taxPrice:req.body.taxPrice,
            totalPrice:req.body.totalPrice,
            user:req.user._id,

        });
        const createOrder=await order.save();
        res.status(201).send({message:'New order created',order:createOrder});

    }
}))
    orderPlaceRouter.get('/:id',expressAsyncHandler(async(req,res)=>{
        const order=await Order.findById(req.params.id);
        if(order)
        {
            res.send(order)
        }else
        {
            res.status(404).send({message:'Order not found'})
        }
    }))
export default orderPlaceRouter;