import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Recipes from "./components/RecipesPage";
import RecipeDetail from "./components/RecipeDetail";
import Courses from "./components/Courses";
import Form from "./components/Form";
import Search from "./components/Search";

function App() {
  const [recipes, setRecipesList] = useState([])
  const [search, setSearch] = useState('')

  async: useEffect(() => {
    fetch('/api/recipes')
    .then(res => res.json())
    .then((data) => setRecipesList(data))
  }, [])

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  let displayedRecipes = recipes.filter(recipe => {
    return recipe.recipe.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home 
              recipes={recipes}
            />
          </Route>
          <Route exact path="/recipes">
            <br/>
            <Search 
              search={search}
              handleSearch={handleSearch}
            />
            <Recipes 
              recipes={displayedRecipes}
            />
          </Route>
          <Route exact path="/recipes/:id">
            <RecipeDetail />
          </Route>
          <Route exact path="/courses">
            <Courses />
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