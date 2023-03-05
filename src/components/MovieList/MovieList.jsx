import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ moviesRes }) => {
  const location = useLocation();
  // console.log(moviesRes);
  return (
    <ul>
      {moviesRes.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  moviesRes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
