import { createBrowserRouter, redirect } from 'react-router-dom';
import Class from '../pages/Class';
import LandingPage from '../pages/LandingPages';
import Layout from '../pages/Layout';
import Login from '../pages/Login';
import OrphansList from '../pages/OrphansList';
import Register from '../pages/Register';
import Schedule from '../pages/Schedule'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    loader: () => {
      const token = localStorage.getItem('access_token')
      if(token){
          throw redirect("/")
      }
  }
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    element: <Layout />,
    loader: () => {
      const token = localStorage.getItem('access_token')
      if(!token){
          throw redirect("/login")
      }
  },
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
        element: <Schedule/>,
      },
      {
        path: '/class',
        element: <Class/>,
      }
    ],
  },
]);
export default router;
