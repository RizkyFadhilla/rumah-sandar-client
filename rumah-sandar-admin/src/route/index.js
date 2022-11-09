import {createBrowserRouter, redirect} from 'react-router-dom'
import Login from '../pages/Login'
import Layout from '../pages/Layout'
import TableVolunteer from '../pages/TableVolunteer'
import TableAdik from '../pages/TableAdik'
import DetailVolunteer from '../pages/DetailVolunteer'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
        loader: () => {
            const token = localStorage.getItem('access_token');
            if (token) {
              throw redirect('/table-volunteer');
            }
          },
    },
    {
        element: <Layout/>,
        loader: () => {
            const token = localStorage.getItem('access_token');
            if (!token) {
              throw redirect('/');
            }
          },
        children: [
            {
                path: "/table-volunteer",
                element: <TableVolunteer/>
            },
            {
                path: "/table-adik",
                element: <TableAdik/>
            },
            {
              path: '/detail-volunteer/:id',
              element: <DetailVolunteer/>
            }
        ]
    }
])


export default router