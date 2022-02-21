import Suspense from 'react';
import Display from "./Display"

export default function Home ({recipes}) {

    // const last = recipes[recipes.length - 1];
    // console.log(last)

    return(
        <div>
            <h1>
                Welcome to The Veganist
            </h1>
            <h3>A Collection of Vegan Recipes</h3>
            <p>New to vegan cooking or just looking for some inspiration?  Feel free to peruse and search the Recipes Index, see dishes by course, or add a recipe of your own! <br/> We're all about sharing delicious plant-based recipes.</p>
            <br/>
            <Display 
                recipes={recipes}
            />
        </div>
    )
}