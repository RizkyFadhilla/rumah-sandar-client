import {createBrowserRouter} from 'react-router-dom'  
import LandingPage from '../pages/LandingPages'
import OrphansList from '../pages/OrphansList'
import Schedule from '../pages/Schedule'

const router =  createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>
    },
    {
        path: '/orphansList',
        element: <OrphansList/>
    },
    {
        path:'/schedule',
        element: <Schedule/>
    }
])

export default router