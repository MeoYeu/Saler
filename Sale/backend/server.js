import express from 'express';
import mongoose from 'mongoose'
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import orderPlaceRouter from './routers/orderPlaceRouter.js';


dotenv.config()
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/SALE',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})


app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
app.use('/api/orders',orderPlaceRouter);

app.get('/',(req,res)=>{
    res.send('server is ready ok')
})
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
})

const port=process.env.PORT||5000;
app.listen(5000,() =>{
    console.log(`server at http://localhost:${port}`);
})