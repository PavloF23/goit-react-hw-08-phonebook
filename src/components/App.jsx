import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { lazy, Suspense, useEffect } from 'react';
import { refreshUser } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import  Loader  from  './Loader/Loader';
import { PrivateRoute } from './PrivateRoute'; 
import { RestrictedRoute } from './RestrictedRoute';
import { Toaster } from 'react-hot-toast';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ThemeProvider } from 'theme-ui';
// import { theme } from 'utils/theme';
// import { Container }  from './Container/Container';
// import { AppStyle } from './App.styled';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { getIsLoading, getError } from "redux/selectors";
// import AppBar from './AppBar/AppBar';
// import Contacts from '../pages/Contacts';
// import Register from '../pages/Register';
// import Login from '../pages/Login'; 
// const HomePage = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));
// const AddContact = lazy(() => import('../pages/AddContact'));

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ThemeProvider>
    <Suspense
      fallback={
        <Loader />
      }
    >
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<RestrictedRoute component={<Home />} />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute  component={<Register />} />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute  component={<Login />} />} />
        <Route
              path="/contacts"
              element={<PrivateRoute component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
    </Suspense>
    <Toaster
        toastOptions={{
          duration: 2500,
          style: {
            fontWeight: '700',
            background: '#fff',
            color: '#212121',
          },
        }}
      />
  </ThemeProvider>
  );
};