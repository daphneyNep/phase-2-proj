import React from "react"

const Search = ({term}) => {

  


    }
    return (
        <div className="searchBar">
            <label htmlFor="search">Search Taxpayers:</label>
            <input
                type="text"
                placeholder= "Type a name to search..."
                value={term}
                onChange={handleChange}/>
        </div>
    )
}

export default Search
