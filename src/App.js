import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"
import RecipeDelete from "./RecipeDelete"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  //const [recipes, setRecipes] = useState([]);
//   const [name,setName] = useState('')
//   const [cuisine,setCuisine] = useState('')
//   const [photo,setPhoto] = useState('')
//   const [ingredients,setIngredients] = useState('')
//   const [preparation,setPreparation] = useState('')
  
//   function handleAdd(){
 
//   }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} setRecipes={setRecipes} />
      <RecipeCreate recipes={recipes} setRecipes={setRecipes}/>
    </div>
  );
}

export default App;
