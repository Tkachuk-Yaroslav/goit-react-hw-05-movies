import Loading from 'components/Loading/Loading';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailsCast } from 'services/themoviedb-api';
import { CastList, DivWrap, ImgItem, ListItem } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  // console.log('movieId cast', movieId);

  useEffect(() => {
    const asyncFetchCast = async () => {
      try {
        setIsLoading(true);
        setIsError(null);

        const data = await fetchDetailsCast(movieId);
        // console.log('data cast', data);
        setCast(data.cast);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    asyncFetchCast();
  }, [movieId]);
  // console.log('cast', cast);
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const DEFAULT_URL =
    'https://static.vecteezy.com/system/resources/previews/012/938/294/original/account-avatar-pixel-perfect-gradient-linear-ui-icon-personal-page-of-site-user-access-to-profile-line-color-user-interface-symbol-modern-style-pictogram-isolated-outline-illustration-vector.jpg';

  return (
    <>
      {isLoading && <Loading />}
      {isError && <p>Oops... Something went wrong, please try again!</p>}

      {/* <div>Cast for {movieId}</div> */}
      {cast.length > 0 ? (
        <CastList>
          {cast.map(item => {
            return (
              <ListItem key={item.id}>
                <DivWrap>
                  <ImgItem
                    // style={{ width: '300px', height: '300' }}
                    src={
                      item.profile_path
                        ? IMAGE_URL + item.profile_path
                        : DEFAULT_URL
                    }
                    alt=""
                  />

                  <h2>{item.name}</h2>
                  <p>Character: {item.character}</p>
                </DivWrap>
              </ListItem>
            );
          })}
        </CastList>
      ) : (
        'Not founded'
      )}
    </>
  );
};

export default Cast;
