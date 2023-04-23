import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="p-5 mb-3 shadow-md">
      <nav className="">
        <NavLink
          to="/"
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
          to="/"
          className="hover:text-red-900 text-5xl flex justify-center mb-4 font-thin"
        >
          <p>Movie Maker</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
