const express = require('express');
const connectMongodb = require('./connection');
const Recipe = require('./model/recipes'); 
const cors = require('cors');
const Category=require('./model/catagory')


const app = express();
app.use(express.json());
app.use(cors()); 
const PORT = 8000; 

connectMongodb("mongodb://localhost:27017/recipiefinder")
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));


  app.get('/api/recipes',async(req,res) =>{
  try{
    const recipes= await Recipe.find();
    res.json(recipes)
  }
  catch(e){
    console.error(error);
    res.status(500).send('Error fetching recipes');
  }
});

app.get('/api/category',async(req,res) =>{
  try{
    const category= await Category.find();
     return res.json(category);
  }
  catch(e){
    console.error(error);
    res.status(500).send('Error fetching recipes');
  }
});

app.get('/api/recipesdetail/:recipename',async(req,res)=>{
     try{
      const recipe=await Recipe.findOne({name: req.params.recipename})
      res.json(recipe);
     }
     catch(error)
     {
      console.error(error);
     }
})

app.get('/api/recipes/:catagory',async(req,res)=>{
  try{
   const recipe=await Recipe.find({catagory: req.params.catagory})
   res.json(recipe);
  }
  catch(error)
  {
   console.error(error);
  }
})
app.post('/api/category', async (req, res) => {
  const {  categoryName, img} = req.body;
  try {
    const newCategory = new Category({
      categoryName,
      img,
      
    
    });

    // Save the new recipe to the database
    await newCategory.save();

    res.status(201).json({ message: "Recipe created successfully", recipe: newCategory });
  } catch (err) {
    console.error("Error inserting recipe:", err);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
