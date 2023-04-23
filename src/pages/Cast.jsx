import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchCastMovie } from 'services/movies-api';

const BASE_URL = 'http://image.tmdb.org/t/p/w154';
const defaultImg =
  'https://img.freepik.com/premium-vector/profile-icon-male-avatar-man-portrait-casual-person-silhouette-face-flat-design-vector-illustration_750364-603.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [castMovies, setCastMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { cast } = await fetchCastMovie(movieId);
        setCastMovies(cast);
      } catch (error) {
        toast.error(
          `${error.message}. Movies loading failed, please try again`
        );
      }
    })();
  }, [movieId]);

  return (
    <>
      <ul className="flex flex-wrap gap-4 justify-center mt-3 text-center mb-3">
        {castMovies.map(({ name, profile_path, id }) => (
          <li key={id} className="border border-black">
            <img
              width="154"
              height="254"
              src={profile_path ? BASE_URL + profile_path : defaultImg}
              alt={name}
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
