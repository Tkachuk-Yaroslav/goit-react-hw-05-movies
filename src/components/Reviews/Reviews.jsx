import React from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  return <div>Reviews for {movieId}</div>;
};

export default Reviews;
