import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import { SharedLayoutStyled } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <SharedLayoutStyled>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SharedLayoutStyled>
  );
};
