import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api-movie';
import {
  Img,
  Section,
  Box,
  SectionInfo,
  ImgMiniature,
  LinkItem,
} from './MovieDetails.styled';

const MoviesDatails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setFilm);
  }, [movieId]);

  if (!film) {
    return null;
  }

  const {
    original_title,
    poster_path,
    release_date,
    vote_average,
    overview,
    genres,
  } = film;
  const img_path = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const miniature_path = `https://cdn-icons-png.flaticon.com/512/1179/1179069.png`;
  const date = new Date(release_date);
  const releaseDate = date.getFullYear();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <>
      <Section>
        <div style={{ width: '250px' }}>
          <LinkItem to={backLinkHref}>&larr; Go back</LinkItem>
          {poster_path && <Img src={img_path} alt={original_title} />}
          {!poster_path && (
            <ImgMiniature src={miniature_path} alt={original_title} />
          )}
        </div>

        <Box>
          <h1>
            {original_title} ({releaseDate})
          </h1>
          <p>User Score: {vote_average.toFixed(1) * 10}% </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(({ name }) => name).join(' ')}</p>
        </Box>
      </Section>
      <SectionInfo>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </SectionInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDatails;
