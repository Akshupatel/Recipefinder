const mongoose=require('mongoose');

const catagorySchema= mongoose.Schema({
    categoryName:{
        type:String,
        require:true,
        unique:true
    },
    img:{
        type:String,
        require:true
    }
})

const Category=mongoose.model('Category',catagorySchema);
module.exports=Category;