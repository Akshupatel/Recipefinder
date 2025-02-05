import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ExploreRecipes() {
  const [category, setCategory] = useState([]);
  

  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await axios.get('http://localhost:8000/api/category');
        setCategory(response.data);
      } catch (error) {
        console.log('Error during fetching category:', error);
      }
    }
    fetchCategory();
  }, []);

  return (
    <div className="container mx-auto p-4">
  <h1 className="text-3xl font-bold text-center mb-8">Explore Recipes</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {category.length === 0 ? (
      <p className="text-center col-span-full">Loading recipes...</p>
    ) : (
      category.map((categoryItem) => (
        <Link
          to={`/category/${categoryItem.categoryName}`}
          className=" overflow-hidden hover:shadow-xl transition duration-300"
        >
          <img
            src={categoryItem.img}
            alt={categoryItem.categoryName}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold text-center text-gray-800">
              {categoryItem.categoryName}
            </h4>
          </div>
        </Link>
      ))
    )}
  </div>
</div>

  );
}
