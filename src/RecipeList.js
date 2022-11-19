import React from "react";
//import Recipe from "./Recipes"
//import recipeData from './RecipeData'
import RecipeDelete from './RecipeDelete'


function RecipeList({recipes, setRecipes}) {
  
  
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
// const recipeRows = recipeData.map((recipe) => {
//             return  <Recipe key={recipe.name} name={recipe.name} cuisine={recipe.cuisine} photo={recipe.photo} ingredients={recipe.ingredients} preparation={recipe.preparation} action={recipe.action}  />
//           })
// const cuisineRows = recipeData.map((recipe) => {
//   return <Recipe key={recipe.name} cuisine={recipe.cuisine} name={recipe.name} />
//})
  
  const recipeRows = recipes.map((recipe, id) => 
    ( <tr key={id}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo}/>
      </td>
      <td className="content_td">
        <p>{(recipe.ingredients)}</p>
      </td>
    <td className="content_td">
      <p>{(recipe.preparation)}</p>
      </td>
      <td>
        {<RecipeDelete id={id} recipes={recipes} setRecipes={setRecipes} />}
      </td>
    </tr>
  ));
  
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cusine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipeRows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
