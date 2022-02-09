import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Recipes from "./components/RecipesPage";
import RecipeDetail from "./components/RecipeDetail";
import Courses from "./components/Courses";
import About from "./components/About";
import Form from "./components/Form";

function App() {
  const [recipes, setRecipesList] = useState([])
  const [searchRecipes, setSearchRecipes] = useState('')


  useEffect(() => {
    fetch('/api/recipes')
    .then(res => res.json())
    .then((data) => setRecipesList(data))
  }, [])

  const displayRecipes = recipes.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchRecipes.toLowerCase())
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/recipes">
            <Recipes 
              recipes={recipes}
            />
          </Route>
          <Route exact path="/recipes/:id">
            <RecipeDetail />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/form">
            <Form
              recipes={recipes}
              setRecipesList={setRecipesList}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;