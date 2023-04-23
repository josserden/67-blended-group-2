import { NavLink } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

const Nav = () => {
  return (
    <div className="p-5 mb-3 shadow-md">
      <nav className="">
        <NavLink
          to={ROUTES.HOME}
          className="mr-5 hover:text-red-900 focus:text-red-900 text-2xl"
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className="hover:text-red-900 focus:text-red-900 text-2xl"
        >
          Movies
        </NavLink>

        <NavLink
          to={ROUTES.HOME}
          className="hover:text-red-900 text-5xl flex justify-center mb-4 font-thin"
        >
          <p>Movie Maker</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
