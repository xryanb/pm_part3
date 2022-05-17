const mongoose=require('mongoose');


const ProductSchema=new mongoose.Schema({
    title:{type:String,
    required:[true,'title is required'],
    minglength:[4,'title must be 4 characters long']},

    price:{type:Number,
    min:[0,'Must be 0 or up!']},

    description:{type:String,
    required:[true,'description required!'],
    minlength:[6,'must be 6 characters long']}
}, {timestamps:true});





module.exports.Product=mongoose.model('Product',ProductSchema);