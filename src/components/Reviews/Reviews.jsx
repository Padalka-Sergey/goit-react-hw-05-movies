import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Section } from './Reviews.styled';
import { getMovieReviews } from 'services/api-movie';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return null;
  }
  const { results } = reviews;

  return (
    <Section>
      {results.length < 1 && <p> We don't have any reviews for this movie</p>}
      {results && (
        <ul>
          {results.map(({ author, content }) => (
            <li key={author}>
              <p>
                <b>Author: {author}</b>
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
};

export default Reviews;
