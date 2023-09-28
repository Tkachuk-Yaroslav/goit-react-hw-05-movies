import MoviesItem from 'components/MoviesItem/MoviesItem';
import React from 'react';
import { MovieList } from './ListMovies.styled';

const ListMovies = ({ movies }) => {
  return (
    <MovieList>
      {movies.map(movie => {
        return <MoviesItem key={movie.id} movie={movie} />;
      })}
    </MovieList>
  );
};

export default ListMovies;
