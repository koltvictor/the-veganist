export default function Display({recipes}) {

    const last = recipes[recipes.length - 1];
    console.log(last)

    return(
        <div>
            <h2>Featured Recipes</h2>
            {/* <div className="recipeCard">
                <img className="recipeImage" src={last.image} alt={last.name} />
                <h3>{last.name}</h3>
                <a href={`/recipes/${last.id}`}>See The Recipe</a>
            </div> */}
        </div>
    )
}