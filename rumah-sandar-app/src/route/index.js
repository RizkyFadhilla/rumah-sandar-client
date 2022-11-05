import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPages';
import Layout from '../pages/Layout';
import Login from '../pages/Login';
import OrphansList from '../pages/OrphansList';
import Schedule from '../pages/Schedule'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/orphansList',
        element: <OrphansList />,
      },
      {
        path: '/schedule',
        element: <Schedule />,
      },
    ],
  },
]);
export default router;
