import {useState, useEffect} from "react"
import {useParams, useHistory} from "react-router-dom";

export default function RecipeDetail () {
    
    const [recipeShowing, setRecipeShowing] = useState ([])

    const id = useParams().id;

    useEffect(() => {
        fetch(`/api/recipes/${id}`)
        .then(res => res.json())
        .then((data) => setRecipeShowing(data))
    }, [id])



    return (
        <div>
            <h1>Recipe Detail</h1>
            <a href="/recipes">Back to recipes</a><br/><br/>
            <img src={recipeShowing.image} alt={recipeShowing.name} />
            <h3>{recipeShowing.name}</h3>
            <p>Ingredients:<br/>{recipeShowing.ingredients}</p>
            <p>Directions:<br/>{recipeShowing.recipe}</p>
            <p>Cuisine: {recipeShowing.cuisine}</p>
            <p>Course(s): {recipeShowing.course}</p>
            <a href="/recipes">Back to recipes</a><br/>
        </div>
    )
}