import { Outlet } from 'react-router-dom';
import { Header, Footer, FooterWrap, FooterLink } from './SharedLayout.styled';
import { Suspense } from 'react';
// import { Box } from 'components/Box/Box';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HomeMenu } from 'components/HomeMenu/HomeMenu';
import { Bars } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
// import { Logo } from 'components/Logo/Logo';
import { selectIsLoggedIn } from 'redux/auth/auth-selector';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Header>
        {isLoggedIn && <UserMenu />}
        {!isLoggedIn && <HomeMenu />}
      </Header>

      <Suspense
        fallback={
          <div
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Bars
              height="60"
              width="80"
              color="#ffcc00"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>

      <Footer>
        <FooterWrap>
          <p>2023.  the developer</p>
          <FooterLink href="mailto:pavel.fastovets@gmail.com">
            pavel.fastovets@gmail.com
          </FooterLink>
        </FooterWrap>
      </Footer>
    </>
  );
};