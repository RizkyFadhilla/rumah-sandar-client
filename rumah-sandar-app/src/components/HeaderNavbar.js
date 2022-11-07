import { useEffect } from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import LogoProfile from '../assets/ex-photo-kakak.jpg'
import LogoRumahSandar from '../assets/logo-rumah-sandar.png'

const HeaderNavbar = () => {
  const navigate = useNavigate()
  
  useEffect(() => {

  }, [])

  const access_token = localStorage.getItem('access_token')
  const role = localStorage.getItem('role')
  const isMacthed = localStorage.getItem('isMatch')

  return (
    <Navbar bg="light" variant="light" className='navbar' sticky="top">
      <Container>
        <Navbar.Brand href="#home"><img
              src={LogoRumahSandar}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Nav className="">
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/orphanages')}>Daftar Panti</Nav.Link> 
          {!access_token &&
          <Nav.Link onClick={() => navigate('/register')}>Register as Volunteer</Nav.Link> }
          {!access_token &&
          <Nav.Link onClick={() => navigate('/register-adik')}>Register as Oprhans</Nav.Link> }
          {!access_token && 
          <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link> }
          {access_token && role === 'volunteer' &&
          <Nav.Link onClick={() => navigate('/orphansList')}>Daftar Adik</Nav.Link> }
          {access_token && !isMacthed &&
          <Nav.Link onClick={() => navigate('/orphansList')}>Daftar Adik</Nav.Link> }
          {access_token && 
          <Nav.Link onClick={() => navigate('/schedule')}>Schedule</Nav.Link> }
          { access_token &&
          <Nav.Link className='ms-2'>Hello, Arya!</Nav.Link>}
          { access_token &&
          <Image src={LogoProfile} width={'40'} height={'40'} roundedCircle={true}/>}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
