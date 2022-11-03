import React from 'react'

const Form = ({displayDropDownArticle}) => {
    const handleChange = (e) => {
        displayDropDownArticle(e.target.value)
    }
  return (
      <form onChange={handleChange}className="dropdown-container">
          <select  className="section-dropdown">
              <option value="">Select a Section</option>
              <option value="arts">Arts</option>
              <option value="automobiles">Automobiles</option>
              <option value="books">Books</option>
              <option value="business">Business</option>
              <option value="fashion">Fashion</option>
              <option value="food">Food</option>
              <option value="home">Home</option>
              <option value="movies">Movies</option>
              <option value="nyregion">NY Region</option>
              <option value="obituaries">Obituaries</option>
              <option value="opinion">Opinion</option>
              <option value="sports">Sports</option>
              <option value="sundayreview">Sunday Review</option>
              <option value="technology">Technology</option>
              <option value="theater">Theater</option>
              <option value="us">US</option>
              <option value="world">World</option>
          </select>
      </form>
  )
}

export default Form