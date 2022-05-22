const express = require('express');
const { append, json } = require('express/lib/response');
const router=express.Router();
const mongoose=require('mongoose');
const Register=require('../model/register')



router.post('/',(req,res,next)=>{
    const register =new Register({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        number:req.body.number
    })
    register.save().then(result =>{
        res.status(200).json({
            message:'Product added to db',
            product:{
                name:result.name,
                number:result.number
            }
        })
    }).catch(err=>{
        res.status(500).json({
            message:'something error happend'
        })
        console.log(err)
    })
   
})





module.exports=router;