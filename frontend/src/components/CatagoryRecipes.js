// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// export default function CatagoryRecipes() {

//   const [recipes,setrecipes]=useState([]);
//   const { category } = useParams();
//   useEffect(()=>{
//     async function fetchRecipeCatagoryWise() {
//       try{
//         const response= await axios.get(`http://localhost:8000/api/recipes/${category}`)
//         setrecipes(response.data);
//       }
//       catch(error)
//       {
//         console.log("error during fetching recipes ",error);
//       }      
//     }
//     fetchRecipeCatagoryWise();
//   },[category]);



//   return (
//     <div className="container mx-auto p-4">
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//       {recipes.length === 0 ? (
//         <p className="text-center col-span-full">Loading recipes...</p>
//       ) : (
//         recipes.map((recipes) => (
//           <Link
//           to={`RecipesDetails/${recipes.name}`}
//             key={recipes._id}
//             className=" overflow-hidden hover:shadow-xl transition duration-300"
//           >
//             <img
//               src={recipes.img}
//               alt={recipes.name}
//               className="w-24 h-24 rounded-full mx-auto"
//             />
//             <div className="p-4">
//               <h4 className="text-lg font-semibold text-center text-gray-800">
//                 {recipes.name}
//               </h4>
//             </div>
//           </Link>
//         ))
//       )}
//     </div>
//   </div>
//   )
// }
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function CatagoryRecipes() {
  const [recipes, setRecipes] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    async function fetchRecipeCategoryWise() {
      try {
        const response = await axios.get(`http://localhost:8000/api/recipes/${category}`);
        setRecipes(response.data);
      } catch (error) {
        console.log("Error during fetching recipes", error);
      }
    }
    fetchRecipeCategoryWise();
  }, [category]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.length === 0 ? (
          <p className="text-center col-span-full">Loading recipes...</p>
        ) : (
          recipes.map((recipe) => (
            <Link
              to={`/category/${category}/recipes/${recipe.name}`} // Correct path
              key={recipe._id} // Use _id as the unique key
              className="overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={recipe.img}
                alt={recipe.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-center text-gray-800">
                  {recipe.name}
                </h4>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
