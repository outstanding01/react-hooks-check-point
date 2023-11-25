import React from 'react'

const Filter = ({onFilterChange}) => {
  return (
    <div>
        <label htmlFor="titleFilter">Title:</label>
        <input type="text"
        id="titleFilter" 
        onChange={(e) => onFilterChange('title', e.target.value)}
        />

        <label htmlFor="ratingFilter">Rating:</label>
        <input type="text"
        id="ratingFilter" 
        onChange={(e) => onFilterChange('rating', e.target.value)}
        />
    </div>
  )
}

export default Filter