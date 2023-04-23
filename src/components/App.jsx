import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import { ROUTES } from 'utils/routes';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path={ROUTES.MOVIES} element={<Movies />} />
          <Route path={ROUTES.MOVIE_DETAILS} element={<MovieDetails />}>
            <Route path={ROUTES.CAST} element={<Cast />} />
            <Route path={ROUTES.REVIEWS} element={<Reviews />} />
          </Route>

          <Route path={ROUTES.NOT_FOUND} element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
