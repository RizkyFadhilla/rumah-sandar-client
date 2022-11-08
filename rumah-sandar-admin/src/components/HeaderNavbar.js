import { Container, Nav, Navbar } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

const HeaderNavbar = () => {
  const navigate = useNavigate()

  function logoutHandler(e) {
    e.preventDefault();

    localStorage.clear()
    navigate('/')
    
  }

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Rumah Sandar - Admin Panel</Navbar.Brand>
        <Nav className="">
          <Nav.Link href="" onClick={() => navigate('/table-volunteer')}>Table Pengajar</Nav.Link>
          <Nav.Link href="" onClick={() => navigate('/table-adik')}>Table Adik</Nav.Link>
          <Nav.Link href="" onClick={logoutHandler}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
