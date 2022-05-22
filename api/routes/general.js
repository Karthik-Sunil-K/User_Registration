const express = require('express');
const app = express();
const mongoose=require('mongoose');
const router = express.Router();



router.get('/general',(req,res,next)=>{
    res.status(200).json({
        message:"get for genral events"
    })
})

module.exports= router;