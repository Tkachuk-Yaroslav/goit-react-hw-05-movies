import Loading from 'components/Loading/Loading';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailsReviews } from 'services/themoviedb-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const asyncFetchReviews = async () => {
      try {
        setIsLoading(true);
        setIsError(null);

        const data = await fetchDetailsReviews(movieId);
        console.log('data reviews', data);
        setReviews(data.results);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    asyncFetchReviews();
  }, [movieId]);
  console.log('reviews', reviews);
  return (
    <>
      {isLoading && <Loading />}
      {isError && <p>Oops... Something went wrong, please try again!</p>}

      <div>Reviews for {movieId}</div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        'Not founded'
      )}
    </>
  );
};

export default Reviews;
