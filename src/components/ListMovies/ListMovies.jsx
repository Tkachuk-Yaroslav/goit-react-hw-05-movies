import MoviesItem from 'components/MoviesItem/MoviesItem';
import React from 'react';

const ListMovies = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return <MoviesItem key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};

export default ListMovies;
