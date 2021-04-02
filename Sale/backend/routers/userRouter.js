import express from 'express';
import data from '../data.js';
import User from '../models/user.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken } from '../ultils.js';
 const userRouter=express.Router();
 userRouter.get('/seed',
 expressAsyncHandler(async (req,res)=>{
   //  await User.remove({});
    const createUser=await User.insertMany(data.users);
    res.send({createUser});
 })
 )
 userRouter.post('/signin',expressAsyncHandler(async(req,res)=>{
    const user=await User.findOne({email:req.body.email});
    if(user)
    {
       if(bcrypt.compareSync(req.body.password,user.password))
       {
          res.send({
             _id:user._id,
             name:user.name,
             email:user.email,
             isAdmin:user.isAdmin,
             token:generateToken(user),
          });
          return;
       }
    }
    res.status(401).send({message:'email or password is not valid'})
 }))

 userRouter.post('/register',expressAsyncHandler(async(req,res)=>{
   const user=new User({name:req.body.name,password:bcrypt.hashSync(req.body.password,8),email:req.body.email});
   const createUser=await user.save();
   res.send({
      _id:createUser._id,
      name:createUser.name,
      email:createUser.email,
      isAdmin:createUser.isAdmin,
      token:generateToken(createUser),
   })
 }))
 export default  userRouter;