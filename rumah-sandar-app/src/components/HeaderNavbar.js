import { useEffect } from 'react';
import { Container, Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import LogoProfile from '../assets/ex-photo-kakak.jpg';
import LogoRumahSandar from '../assets/logo-rumah-sandar.png';

const HeaderNavbar = () => {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  function logoutHandler(e) {
    e.preventDefault();

    localStorage.clear();
    navigate('/');
  }

  const access_token = localStorage.getItem('access_token');
  const role = localStorage.getItem('role');
  const isMacthed = localStorage.getItem('isMatch');

  return (
    <Navbar bg="light" variant="light" className="navbar" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={LogoRumahSandar} width="50" height="50" className="d-inline-block align-top" alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Nav className="">
          <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate('/orphanages')}>Daftar Panti</Nav.Link>
          {!access_token && (
            <NavDropdown title="Daftar" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" onClick={() => navigate('/register')}>
                Relawan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" onClick={() => navigate('/register-adik')}>
                Adik Asuh
              </NavDropdown.Item>
            </NavDropdown>
          )}
          {!access_token && (
            <NavDropdown title="Masuk" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" onClick={() => navigate('/loginVolunteer')}>
                Relawan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" onClick={() => navigate('/login')}>
                Adik Asuh
              </NavDropdown.Item>
            </NavDropdown>
          )}

          {access_token && role === 'volunteer' && <Nav.Link onClick={() => navigate('/orphansList')}>Daftar Adik</Nav.Link>}
          {access_token && !isMacthed && <Nav.Link onClick={() => navigate('/orphansList')}>Daftar Adik</Nav.Link>}
          {access_token && <Nav.Link onClick={() => navigate('/schedule')}>Schedule</Nav.Link>}
          {access_token && (
            <Nav.Link className="ms-2" onClick={logoutHandler}>
              Keluar
            </Nav.Link>
          )}
          {access_token && <Nav.Link className="ms-2">Hello, Arya!</Nav.Link>}
          {access_token && <Image src={LogoProfile} width={'40'} height={'40'} roundedCircle={true} />}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
