import PropTypes from "prop-types"
import React from 'react'

const Moviecard = ({movie}) => {
  return (
    <div className='movie-card'>
        <img src={movie.posterURL} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
    </div>
  )
}

    Moviecard.propTypes = {
    movie: PropTypes.shape({
    description: PropTypes.any, 
    posterURL: PropTypes.any,
    rating: PropTypes.any,
    title: PropTypes.any
  })
}

export default Moviecard