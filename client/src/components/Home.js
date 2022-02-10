import Display from "./Display"

export default function Home ({recipes}) {

    
    return(
        <div>
            <h1>
                Welcome to The Veganist
            </h1>
            <h3>A Collection of Vegan Recipes</h3>
            <p>Feel free to peruse and search the Recipes Index, see dishes by course, or add a recipe of your own!</p>
            <br/>
            <Display
                recipes={recipes}
            />
        </div>
    )
}