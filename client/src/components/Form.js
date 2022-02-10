import {useState, useEffect} from "react"

export default function Form ({recipes, setRecipesList}) {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [recipe, setRecipe] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [course, setCourse] = useState('');

    function handleSubmit(e) {
        // e.preventDefault();
        // e.target.reset();
        fetch('/api/recipes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                image: image,
                ingredients: ingredients,
                recipe: recipe,
                cuisine: cuisine,
                course: course
            }),
        })
        .then(res => res.json())
        .then((newRecipe) => handleAddRecipe(newRecipe))
        
    };

    function handleAddRecipe(newRecipe) {
        const updatedRecipeArray = [...recipes, newRecipe]
        setRecipesList(updatedRecipeArray)
    }

    return (
        <div>
            <h1>Form</h1><br/>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /><br/>
                <input 
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder="Ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                /><br/>
                <input
                    type="text"
                    placeholder="Instructions"
                    value={recipe}
                    onChange={(e) => setRecipe(e.target.value)}
                    required
                /><br/>
                <input
                    type="text"
                    placeholder="Cuisine"
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                    required
                /><br/>
                <input
                    type="text"
                    placeholder="Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                /><br/><br/>
                <button className="submitButton" type="submit">Submit Recipe</button>
            </form>
        </div>
    )
}