import React from "react";
import './Pantry.css';

const Pantry = (props) => {
  return (
    <div className="pantry">
      <form id="addIngredient">
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" />

        <label htmlFor="quantity">Quantity: </label>
        <input type="text" name="quantity" id="quantity" />

        <label htmlFor="expirationDate">Expiration Date: </label>
        <input type="date" name="expirationDate" id="expirationDate" />

        <button type="submit">Add to Pantry!</button>
      </form>

      <div id="pantryList">
        <h2>Pantry</h2>
        <ul>
          {props.ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name}: {ingredient.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pantry;
