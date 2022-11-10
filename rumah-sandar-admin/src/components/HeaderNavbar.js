import { Container, Nav, Navbar } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

const HeaderNavbar = () => {
  const navigate = useNavigate()

  function logoutHandler(e) {
    e.preventDefault();

    localStorage.clear()
    
    navigate('/') 
    
    toast('Akun kamu berhasil keluar!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    
  }

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Rumah Sandar - Admin Panel</Navbar.Brand>
        <Nav className="">
          <Nav.Link href="" onClick={() => navigate('/table-volunteer')}>Daftar Relawan</Nav.Link>
          <Nav.Link href="" onClick={() => navigate('/table-adik')}>Daftar Adik Asuh</Nav.Link>
          <Nav.Link href="" onClick={logoutHandler}>Keluar</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
