import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/themoviedb-api';

const MoviesDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  console.log('movieId', movieId);
  useEffect(() => {
    const asyncFetchById = async () => {
      const data = await fetchMovieById(movieId);
      console.log('data', data);
      setMovie(data);
    };

    asyncFetchById();
  }, [movieId]);
  const { title, poster_path, release_date, vote_average, overview } =
    movie || {};
  const genres = movie.genres ? movie.genres : [];
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
  const DEFAULT_URL =
    'https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg';
  const imgSrc = poster_path ? IMAGE_URL + poster_path : DEFAULT_URL;

  return (
    <>
      <div>MoviesDetails - {movieId} </div>
      <img src={imgSrc} alt="" />
      <h2>
        {title} ({release_date})
      </h2>
      <p>User Score: {Math.round(vote_average * 10)}%</p>
      <h2>Oveview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(genre => genre.name).join(' ')}</p>
      <p>Additional infotmation</p>

      <Link to={'cast'}>Cast</Link>
      <Link to={'reviews'}>Reviews </Link>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
