import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api-movie';
import { Img, Section } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    getMovieCast(movieId).then(setCastList);
  }, [movieId]);

  if (!castList) {
    return null;
  }
  const { cast } = castList;

  return (
    <Section>
      <ul>
        {cast.map(({ cast_id, name, character, profile_path }) => {
          const img_path = `https://image.tmdb.org/t/p/w500${profile_path}`;
          const dummy_path = `https://cdn-icons-png.flaticon.com/512/6813/6813432.png`;
          return (
            <li key={cast_id}>
              {profile_path && <Img src={img_path} alt={name} />}
              {!profile_path && <Img src={dummy_path} alt={name} />}
              <p>{name}</p>
              {character && <p>Character: {character}</p>}
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Cast;
