import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Footer,
  Header,
  HeaderList,
  HeaderListItem,
  LinkNav,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <HeaderList>
          <HeaderListItem>
            <LinkNav to="/">Home</LinkNav>
          </HeaderListItem>
          <HeaderListItem>
            <LinkNav to="/movies">Movies</LinkNav>
          </HeaderListItem>
        </HeaderList>
      </Header>
      <main>
        <Suspense fallback={'Loading.....'}>
          <Outlet />
        </Suspense>
      </main>
      <Footer>
        <div>
          This program was developed by a student of GoIT - Tkachuk Yaroslav
        </div>
      </Footer>
    </>
  );
};

export default Layout;
