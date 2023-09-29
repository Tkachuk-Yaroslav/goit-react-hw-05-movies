import Loading from 'components/Loading/Loading';
import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/themoviedb-api';
import {
  AddInfo,
  BackBtn,
  CardTitle,
  FlexWrap,
  LinkNav,
} from './MovieDetails.styled';

const MoviesDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const location = useLocation();
  // console.log('locationDetails', location);

  const navigate = useNavigate();

  // console.log('movieId', movieId);
  useEffect(() => {
    const asyncFetchById = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const data = await fetchMovieById(movieId);
        // console.log('data', data);
        setMovie(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    asyncFetchById();
  }, [movieId]);

  const handleClickBackBtn = () => {
    navigate(location.state ?? '/movies');
  };

  const { title, poster_path, vote_average, overview } = movie || {};
  const genres = movie.genres ? movie.genres : [];
  const release_date = movie.release_date ?? '';
  const year = release_date && release_date.slice(0, 4);
  // console.log('genres', genres);
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
  const DEFAULT_URL =
    'https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg';
  const imgSrc = poster_path ? IMAGE_URL + poster_path : DEFAULT_URL;

  return (
    <>
      {isLoading && <Loading />}
      {isError && <p>Oops... Something went wrong, please try again!</p>}
      <BackBtn onClick={handleClickBackBtn}>{'← Go back'}</BackBtn>
      {/* <div>MoviesDetails - {movieId} </div> */}
      <FlexWrap>
        <img src={imgSrc} alt="" />
        <div>
          <CardTitle>
            {title} ({year})
          </CardTitle>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <CardTitle>Oveview</CardTitle>
          <p>{overview}</p>
          <CardTitle>Genres</CardTitle>
          <p>
            {genres.length > 0
              ? genres.map(genre => genre.name).join(' ')
              : 'Not Founded'}
          </p>
        </div>
      </FlexWrap>
      <AddInfo>Additional infotmation</AddInfo>

      <FlexWrap>
        <LinkNav to={'cast'} state={location.state}>
          Cast
        </LinkNav>
        <LinkNav to={'reviews'} state={location.state ?? '/movies'}>
          Reviews{' '}
        </LinkNav>
      </FlexWrap>
      <Suspense fallback={'Loading.....'}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
