import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, LinkItem, Ul } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Ul>
            <li>
              <LinkItem to="/">Home</LinkItem>
            </li>
            <li>
              <LinkItem to="/movies">Movies</LinkItem>
            </li>
          </Ul>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
