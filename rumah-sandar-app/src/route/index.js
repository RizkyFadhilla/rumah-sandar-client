import {createBrowserRouter, redirect} from 'react-router-dom'  
import LandingPage from '../pages/LandingPages'

const router =  createBrowserRouter([
    {
        path: '/',
        element: <LandingPage/>
    }
])

export default router