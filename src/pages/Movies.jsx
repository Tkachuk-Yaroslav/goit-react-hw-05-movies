import React from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      {['Movies-1', 'Movies-2', 'Movies-3'].map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
