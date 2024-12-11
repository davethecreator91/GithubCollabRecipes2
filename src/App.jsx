import React, { useState } from 'react';
import './app.css'

const App = () => {
  const [submittedRecipes, setSubmittedRecipes] = useState([]);

  return (
    <div className= "main">
      <h1>Recipe Submission App</h1>
      {/* Pantry component will go here */}

      <h2>Submitted Recipes</h2>
      <ul>
        {submittedRecipes.map((rec, index) => (
          <li key={index}>
            <h3>{rec.title}</h3>
            <p><strong>Ingredients:</strong> {rec.ingredients}</p>
            <p><strong>Instructions:</strong> {rec.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
