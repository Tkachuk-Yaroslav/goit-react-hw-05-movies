import ListMovies from 'components/ListMovies/ListMovies';
import Loading from 'components/Loading/Loading';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchInMoviesPage } from 'services/themoviedb-api';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const [searchParams] = useSearchParams();

  const query = searchParams.get('search');

  const ref = useRef(query);

  const formSubmit = data => {
    setSearchQuery(data);
  };

  const asyncFetchMovies = useCallback(async searchText => {
    try {
      setIsLoading(true);
      setIsError(null);

      const data = await fetchInMoviesPage(searchText);
      // console.log('data', data);
      setMovies(data.results);
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // if (!searchQuery) {
    //   return;
    // }
    // const asyncFetchMovies = async () => {
    //   try {
    //     setIsLoading(true);
    //     setIsError(null);

    //     const data = await fetchInMoviesPage(searchQuery);
    //     console.log('data', data);
    //     setMovies(data.results);
    //   } catch (error) {
    //     setIsError(error.message);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    searchQuery && asyncFetchMovies(searchQuery);
  }, [asyncFetchMovies, searchQuery]);
  // console.log('movies', movies);

  useEffect(() => {
    ref.current && asyncFetchMovies(ref.current);
  }, [asyncFetchMovies]);
  return (
    <div>
      {<SearchForm onSubmit={formSubmit} />}
      {isLoading && <Loading />}
      {isError && <p>Oops... Something went wrong, please try again!</p>}

      {movies.length > 0 && <ListMovies movies={movies} />}
      {/* {movies.map(movie => {
        return (
          <Link key={movie.id} to={`${movie.id}`}>
            {movie.title}
          </Link>
        );
      })} */}
    </div>
  );
};

export default Movies;
