import React from 'react';
import { useLocation } from 'react-router-dom';
import { ItemLink } from './MoviesItem.styled';

const MoviesItem = ({ movie }) => {
  const location = useLocation();
  console.log('location', location);
  const { id, title } = movie;
  return (
    <li>
      <ItemLink to={`/movies/${id}`} state={location}>
        🎬{title}
      </ItemLink>
    </li>
  );
};

export default MoviesItem;
