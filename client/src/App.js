import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
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

  useEffect(() => {
    const fetchData = async () => {await axios.get('/api/recipes')
    .then(res=>setRecipesList(res.data))
  }
    fetchData()
  }, [])

  console.log(recipes)

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  // let displayedRecipes = recipes.filter(recipe => {
  //   return recipe.recipe.toLowerCase().includes(search.toLowerCase())
  // })

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
              recipes={recipes}
            />
          </Route>
          
          <Route exact path="/recipes/:id">
            <RecipeDetail />
          </Route>
          <Route exact path="/courses">
            <Courses 
              recipes={recipes}
            />
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