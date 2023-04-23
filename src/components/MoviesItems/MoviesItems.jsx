import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from 'utils/routes';
const BASE_URL = 'http://image.tmdb.org/t/p/w500/';
const defaultImg =
  'https://yt3.googleusercontent.com/pL_VB56ZIus1L_ORk679enHohInq0pjCweZ4vgqS5yM4KB0mAp8DEznP94MdSIQpSM3-5uE_lQ=s900-c-k-c0x00ffffff-no-rj';

const MoviesItems = ({ movies, location }) => {
  const locationItem = useLocation();
  const to = location.pathname;

  return (
    <>
      <ul className="mb-5 flex flex-wrap">
        {movies.map(({ id, poster_path, title }) => (
          <Link
            key={id}
            to={to !== ROUTES.HOME ? `${id}` : `${ROUTES.MOVIES}/${id}`}
            state={{ from: locationItem }}
            className="hover:text-stone-400  border border-black text-center ml-10 mb-5 rounded"
          >
            <li>
              <img
                src={poster_path ? BASE_URL + poster_path : defaultImg}
                alt={title}
                width="200"
              />
              <p className="ml-5 mt-1 w-40 h-24">{title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
export default MoviesItems;
