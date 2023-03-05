

import { useEffect, useState } from 'react';
import { getSearchMovies } from 'services/api-movie';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [moviesSearch, setMoviesSerch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParams = searchParams.get('filter') ?? '';

  useEffect(() => {
    getSearchMovies(filterParams).then(setMoviesSerch);
  }, [filterParams]);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const moviesRes = moviesSearch.results;
  if (!moviesRes) {
    return null;
  }

  return (
    <>
      <SearchBox onSubmit={changeFilter} />
      {moviesRes.length > 0 && <MovieList moviesRes={moviesRes} />}
      {!moviesSearch.total_results && filterParams && (
        <p style={{ display: 'block', margin: '16px' }}>
          <b> There is no such movie :(</b>
        </p>
      )}
    </>
  );
};

export default Movies;

