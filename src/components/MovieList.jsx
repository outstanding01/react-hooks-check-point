// MovieList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './Moviecard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Link to={`/movie/${encodeURIComponent(movie.title)}`} key={movie.title}>
          {/* Use encodeURIComponent to handle special characters in the title */}
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
