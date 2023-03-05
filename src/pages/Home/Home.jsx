
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/api-movie';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovie);
  }, []);

  const trendMovieRes = trendingMovie.results;
  if (!trendMovieRes) {
    return null;
  }

  return (
    <>
      <h1>Trending today</h1>
      <MovieList moviesRes={trendMovieRes} />
    </>
  );
};

export default Home;


