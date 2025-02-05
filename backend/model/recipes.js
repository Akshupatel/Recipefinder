const mongoose =require('mongoose');


const recipesSchema= new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    img:{
        type:String
    },
    catagory:{
        type:[String]
    },
    Popular:{
        type:Boolean
    },
    ingredients:
    {
        type:[String]

    },

    recipeMethod:
    {
       type:[String]
    }
})

const Recipe= new mongoose.model('recipes',recipesSchema);
module.exports =Recipe;