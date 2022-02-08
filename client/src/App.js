import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Recipes from "./components/RecipesPage";
import Courses from "./components/Courses";
import About from "./components/About";
import Form from "./components/Form";

function App() {
  const [recipes, setRecipesList] = useState([])


  useEffect(() => {
    fetch('/api/recipes')
    .then(res => res.json())
    .then((data) => setRecipesList(data))
  }, [])

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
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/form">
            <Form />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;