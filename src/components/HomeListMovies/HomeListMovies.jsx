import React from 'react';
import { Link } from 'react-router-dom';

const HomeListMovies = ({ populars }) => {
  return (
    <ul>
      {populars.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HomeListMovies;
