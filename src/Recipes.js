import React from "react";
import RecipeData from './RecipeData'

const customWidth = {
  width: '30%'
};

const defaultWidth = {
  width: '10%'
};

function Recipe(RecipeData){
  return (
      <tr>
        <td style={defaultWidth}>
        {RecipeData.name}
        </td>
      <td style={defaultWidth}>
        {RecipeData.cuisine}
      </td>
      <td style={defaultWidth}>
        <img src={RecipeData.photo} />
      </td>
      <td className="content_td" style={customWidth}>
        <p>
        {RecipeData.ingredients}
        </p>
      </td>
      <td className="content_td" style={customWidth}>
       <p>
        {RecipeData.preparation}
        </p>
      </td>
      <td style={defaultWidth}>
        <button name="delete"> Delete
        {RecipeData.action}
        </button>
      </td>
      </tr>
  )
}

export default Recipe;