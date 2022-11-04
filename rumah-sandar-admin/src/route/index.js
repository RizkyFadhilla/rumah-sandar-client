import {createBrowserRouter} from 'react-router-dom'
import Login from '../pages/Login'
import Layout from '../pages/Layout'
import TableVolunteer from '../pages/TableVolunteer'
import TableAdik from '../pages/TableAdik'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        element: <Layout/>,
        children: [
            {
                path: "/table-volunteer",
                element: <TableVolunteer/>
            },
            {
                path: "/table-adik",
                element: <TableAdik/>
            }
        ]
    }
])


export default router