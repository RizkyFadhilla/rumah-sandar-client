import './App.css';
import { createBrowserRouter, redirect, RouterProvider} from 'react-router-dom'
import router from './route';

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
