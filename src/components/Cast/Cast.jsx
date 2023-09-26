import React from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  return <div>Cast for {movieId}</div>;
};

export default Cast;
