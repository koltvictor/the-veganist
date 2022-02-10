export default function Display({recipes}) {
    
    const last = recipes[recipes.length - 1];
    const lastThree = recipes.slice(Math.max(recipes.length -5, 1))
    console.log(last)
    console.log(lastThree)


    return(
        <div>
            <h2>Featured Recipes</h2>
            <div className="recipeCard">
                <img className="recipeImage" src={last.image} alt={last.name} />
                <h3>{last.name}</h3>
            </div>
        </div>
    )
}