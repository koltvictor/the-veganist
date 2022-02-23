// import { Suspense } from "react";

export default function Display({recipes}) {

    // const last = recipes[recipes.length - 1];
    // console.log(recipes)

    return(
        <div>
            <h2>Featured Recipes</h2>
            {/* <Suspense fallback={<div>Loading...</div>}>
            <div className="recipeCard">
                <img className="recipeImage" src={last.image} alt={last.name} />
                <h3>{last.name}</h3>
                <a href={`/recipes/${last.id}`}>See The Recipe</a>
            </div>
            </Suspense> */}
        </div>
    )
}