import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './popularrecipes.css'

export default function Popularrecipes() {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => { 
    async function fetchRecipes() {
      try {
        const response = await axios.get('http://localhost:8000/api/recipes');
        setRecipeData(response.data);  
      } catch (e) {
        console.log("Error during recipe fetching:", e);
      }
    }

    fetchRecipes();
  }, []); 
   const defaultImg="https://edinazephyrus.com/wp-content/uploads/2019/10/food-letters.tiffany-900x600.png";
  return (
    <div>
      {recipeData.length === 0 ? (
        <h1>Loading recipes...</h1>
      ) : (
        recipeData.map((recipe, index) => (
          <div className='recipe-box' key={index}>
            <img src={recipe.img} alt={recipe.name} className="recipe-image" onError={(e) => e.target.src = defaultImg}  />
            <h4 className="recipe-name">{recipe.name}</h4>
          </div>
        ))
      )}
    </div>
  );
}
