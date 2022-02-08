import RecipeCard from "./RecipeCard";

export default function RecipesPage ({recipes}) {

    const recipe = recipes.map((data) => {
        return(
            <RecipeCard 
                key={data.id}
                recipe={data}
            />
        )
    })

    return(
        <div>
            <h1> RECIPES </h1>
            {recipe}
        </div>
    )
}