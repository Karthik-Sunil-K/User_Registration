const mongoose =require('mongoose');


const RegisterSchema =mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:String,
    number:Number
});

module.exports=mongoose.model('Register',RegisterSchema);
