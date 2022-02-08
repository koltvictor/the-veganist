import { Link } from 'react-router-dom';

export default function RecipeCard({recipe}){

    const {id, name, image} = recipe;

    return(
        <div>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <Link to={`/recipes/${id}`}>DETAILS</Link>
        </div>
    )
}