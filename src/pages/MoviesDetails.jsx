import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const params = useParams();
  console.log('params', params);
  return (
    <>
      <div>MoviesDetails - {params.movieId} </div>
      <Link to={'cast'}>Cast</Link>
      <Link to={'reviews'}>Reviews </Link>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
