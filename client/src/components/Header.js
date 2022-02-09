
export default function Header () {
    return(
        <div>
            <div className="headerWrapper">
                <h2 className="headerText">Vegan Recipes</h2>
                <a className="nav" href="/">Home</a>            
                <a className="nav" href="/recipes">Recipes Index</a>
                <a className="nav" href="/courses">Sort by Course</a>
                <a className="nav" href="/about">About</a>
                <a className="nav" href="/form">Add a New Recipe</a>
            </div>
        </div>
    )
}