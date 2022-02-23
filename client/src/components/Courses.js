export default function Courses ({recipes}) {

    const lunch = recipes.filter((recipe) => {
        return recipe.course === "lunch or dinner" || recipe.course === "Dinner"
    })

    console.log(lunch)

    return(
        <div>
            <h1> COURSES </h1>
            <h3>Breakfast list</h3>
            <h3>Lunch list</h3>
            <h3>Dinner list</h3>
        </div>
    )
}