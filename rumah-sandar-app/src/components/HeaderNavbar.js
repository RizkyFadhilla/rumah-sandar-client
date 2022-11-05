import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


const HeaderNavbar = () => {
  const navigate = useNavigate()
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Rumah Sandar</Navbar.Brand>
        <Nav className="">
          <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link>
          <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
