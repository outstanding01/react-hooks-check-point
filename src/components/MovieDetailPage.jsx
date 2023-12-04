import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieDetailPage = ({ movies }) => {
  const { title } = useParams();

  // Find the movie details based on the title
  const movie = movies.find((m) => m.title === decodeURIComponent(title));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <img src={movie.posterURL} alt={movie.title} />
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default MovieDetailPage;
