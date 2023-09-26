import React from 'react';
import { useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const params = useParams();
  console.log('params', params);
  return <div>MoviesDetails MoviesDetails MoviesDetails </div>;
};

export default MoviesDetails;
