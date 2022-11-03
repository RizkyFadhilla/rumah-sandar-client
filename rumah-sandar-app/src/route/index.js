import {createBrowserRouter} from 'react-router-dom'  
import LandingPage from '../pages/LandingPages'
import OrphansList from '../pages/OrphansList'

const router =  createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>
    },
    {
        path: '/orphansList',
        element: <OrphansList/>
    }
])

export default router