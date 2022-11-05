import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


const HeaderNavbar = () => {
  const navigate = useNavigate()

  const access_token = localStorage.getItem('access_token')
  const role = localStorage.getItem('role')

  return (
    <Navbar bg="light" variant="light" className='navbar'>
      <Container>
        <Navbar.Brand href="#home">Rumah Sandar</Navbar.Brand>
        <Nav className="">
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          {!access_token &&
          <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link> }
          {!access_token && 
          <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link> }
          {access_token && role === 'volunteer' &&
          <Nav.Link onClick={() => navigate('/orphansList')}>Daftar Adik</Nav.Link> }
          {access_token && 
          <Nav.Link onClick={() => navigate('/schedule')}>Schedule</Nav.Link> }
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
