import { Link } from 'react-router-dom';

export default function RecipeCard({recipe}){

    const {id, name, image} = recipe;

    return(
        <div className="recipeCard">
            <img className="recipeImage" src={image} alt={name} />
            <h3>{name}</h3>
            <Link to={`/recipes/${id}`}>See The Recipe</Link>
        </div>
    )
}