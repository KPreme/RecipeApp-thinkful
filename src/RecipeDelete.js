import React from 'react'

function RecipeDelete({id, recipes, setRecipes}){
  const deleteHandler = (deleteIndex) => {
    setRecipes([...recipes].filter((recipe, index) => index != deleteIndex));
  };
  return (
    <button type="button" name="delete" onClick={() => deleteHandler(id)}>
      Delete
    </button>
  );
}

export default RecipeDelete