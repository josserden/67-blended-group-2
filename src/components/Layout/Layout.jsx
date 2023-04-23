import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Nav from 'components/Navigation/Nav';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Nav />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <Toaster />
    </>
  );
};

export default Layout;
