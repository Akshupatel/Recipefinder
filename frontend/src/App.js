import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home';
import About from './components/about';
import Recipe from "./components/recipe";
import Layout from "./components/layout";
import CatagoryRecipes from "./components/CatagoryRecipes";
import RecipeDetails from "./components/RecipeDetils";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>}></Route>
           <Route path="recipes" element={<Recipe/>}></Route>
           <Route path="about" element={<About/>}></Route>
           {/* <Route path="CatagryRecipes/:category" element={<CatagoryRecipes/>}></Route>
           <Route path="CatagryRecipes/:category/recipes/:recipeName" element={<RecipeDetails />} /> */}
           <Route path="category/:category" element={<CatagoryRecipes />} /> {/* Fixed route */}
           <Route path="category/:category/recipes/:recipeName" element={<RecipeDetails />} /> {/* Fixed route */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
