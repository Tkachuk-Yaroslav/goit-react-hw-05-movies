import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesItem = ({ movie }) => {
  const location = useLocation();
  console.log('location', location);
  const { id, title } = movie;
  return (
    <li>
      <Link to={`/movies/${id}`} state={location}>
        {title}
      </Link>
    </li>
  );
};

export default MoviesItem;
