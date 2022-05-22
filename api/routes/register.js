const express = require('express');
const { append, json } = require('express/lib/response');
const router=express.Router();
const mongoose=require('mongoose');
// const Register=require('../model/register')



router.post('/',(req,res,next)=>{
    const register = {
        name:req.body.name,
        number:req.body.number
    };
    res.status(200).json({
        message:register
    })
})






module.exports=router;