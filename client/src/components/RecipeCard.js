export default function RecipeCard({recipe}){

    return(
        <div>
            <a href="/recipe">
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            </a>
        </div>
    )
}