export default function Search ({search, handleSearch}) {
    return(
        <div>
            <input
                type="text"
                placeholder="Search for a recipe"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}