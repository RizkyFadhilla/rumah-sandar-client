import { createBrowserRouter, redirect } from 'react-router-dom';
import Class from '../pages/Class';
import LandingPage from '../pages/LandingPages';
import Layout from '../pages/Layout';
import Login from '../pages/Login';
import LoginVolunteer from '../pages/LoginVolunteer';
import OrphansList from '../pages/OrphansList';
import PagePanti from '../pages/PagePanti';
import Register from '../pages/Register';
import RegisterAdik from '../pages/RegisterAdik';
import Schedule from '../pages/Schedule';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/orphanages',
    element: <PagePanti />,
  },
  {
    path: '/login',
    element: <Login />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        throw redirect('/');
      }
    },
  },
  {
    path: '/loginVolunteer',
    element: <LoginVolunteer />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        throw redirect('/');
      }
    },
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/register-adik',
    element: <RegisterAdik />,
  },
  {
    element: <Layout />,
    loader: () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        throw redirect('/login');
      }
    },
    children: [
      {
        path: '/orphansList',
        element: <OrphansList />,
        loader: () => {
          const isMatch = localStorage.getItem('isMatch');
          if (isMatch) {
            throw redirect('/');
          }
        },
      },
      {
        path: '/schedule',
        element: <Schedule />,
      },
      {
        path: '/class',
        element: <Class />,
      },
    ],
  },
]);
export default router;
