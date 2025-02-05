import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function RecipeDetails() {
  const { recipeName } = useParams(); // Get recipeName from the URL
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    async function fetchRecipeDetails() {
      try {
        const response = await axios.get(`http://localhost:8000/api/recipesdetail/${recipeName}`);
        setRecipeDetails(response.data);
      } catch (err) {
        console.error("Error in fetching recipe details:", err);
      }
    }
    fetchRecipeDetails();
  }, [recipeName]);

  return (
    <div className="container mx-auto p-4">
      {recipeDetails ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold">{recipeDetails.name}</h1>
          <img src={recipeDetails.img} alt={recipeDetails.name} className=" w-400 h-300 mx-auto  my-4" />
          <div>
            <h2 className="text-xl font-semibold">Ingredients:</h2>
            <ul>
              {recipeDetails.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold mt-4">Recipe Method:</h2>
            <ol>
              {recipeDetails.recipeMethod.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      ) : (
        <p>Loading recipe details...</p>
      )}
    </div>
  );
}
