import ListMovies from 'components/ListMovies/ListMovies';
import Loading from 'components/Loading/Loading';
import React, { useEffect, useState } from 'react';
import { fetchToHome } from 'services/themoviedb-api';
import { HomeHeader } from './Home.styled';

const Home = () => {
  const [populars, setPopulars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    async function asyncFetchHome() {
      try {
        setIsLoading(true);
        setIsError(null);

        const data = await fetchToHome();
        console.log('data', data);
        setPopulars(data.results);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    asyncFetchHome();
  }, []);
  console.log('populars', populars);

  return (
    <>
      {isLoading && <Loading />}

      {!isError && <HomeHeader>Trending today</HomeHeader>}
      {isError && <p>Oops... Something went wrong, please try again!</p>}
      {populars.length > 0 && <ListMovies movies={populars} />}
    </>
  );
};

export default Home;
