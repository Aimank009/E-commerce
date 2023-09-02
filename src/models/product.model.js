const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        requied:true
    },
    description:{
        type:String,
        requied:true
    },
    price:{
        type:Number,
        requied:true
    },
    discountedPrice:{
        type:Number,
        requied:true
    },
    discountPresent:{
        type:Number,
        requied:true
    },
    quantity:{
        type:Number,
        requied:true
    },
    brand:{
        type:String,
    },
    color:{
        type:String,
    },
    sizes:[{
       name:[{type:String}],
       quantity:{type:Number}
    }],
    imageUrl:{
        type:String,
    },
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'ratings'
        }
    ],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'reviews'
    }],
    numRatings:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Product=mongoose.model('products',productSchema);

module.exports=Product