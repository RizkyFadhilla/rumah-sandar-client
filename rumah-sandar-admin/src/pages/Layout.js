import { Outlet } from 'react-router-dom';
import HeaderNavbar from '../components/HeaderNavbar';

const Layout = () => {
  return (
    <>
      <HeaderNavbar />
      <Outlet/>
    </>
  );
};

export default Layout;
