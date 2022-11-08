import { useEffect } from 'react';
import { Container, Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoRumahSandar from '../assets/logo-rumah-sandar.png';

const HeaderNavbar = () => {
  const navigate = useNavigate();

  const{ loginUser } = useSelector((state) => {
    return state.user
  })

  function logoutHandler(e) {
    e.preventDefault();

    localStorage.clear()
    navigate('/')
    
  }

  // const access_token = loginUser?.access_token
  // const role = loginUser.sendData?.role
  // const isMacthed = loginUser.sendData?.matchStatus
  // const username = loginUser.sendData?.fullName
  // const imageProfile = loginUser.sendData?.imageUrl
  const access_token = localStorage.access_token
  const role = localStorage.role
  const isMacthed = localStorage.isMacthed
  const username = localStorage.username
  const imageProfile = localStorage.image
  
  // if(!access_token){
  //   <Navbar bg="light" variant="light" className="navbar" sticky="top"></Navbar>  
  // }
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
              <NavDropdown.Item href="" onClick={() => navigate('/register')}>
                Relawan
              </NavDropdown.Item>
              <NavDropdown.Item href="" onClick={() => navigate('/register-adik')}>
                Adik Asuh
              </NavDropdown.Item>
            </NavDropdown>
          )}
          {!access_token && (
            <NavDropdown title="Masuk" id="navbarScrollingDropdown">
              <NavDropdown.Item href="" onClick={() => navigate('/loginVolunteer')}>
                Relawan
              </NavDropdown.Item>
              <NavDropdown.Item href="" onClick={() => navigate('/login')}>
                Adik Asuh
              </NavDropdown.Item>
            </NavDropdown>
          )}

          {access_token && role === 'volunteer' && <Nav.Link onClick={() => navigate('/orphansList')}>Daftar Adik</Nav.Link>}
          {access_token && !isMacthed && <Nav.Link onClick={() => navigate('/orphansList')}>Daftar Adik</Nav.Link>}
          {access_token && <Nav.Link onClick={() => navigate('/schedule')}>Jadwal Kelas</Nav.Link>}
          {access_token && (
            <Nav.Link className="ms-2" onClick={logoutHandler}>
              Keluar
            </Nav.Link>
          )}
          {access_token && <Nav.Link className="ms-2">Hello, {username}!</Nav.Link>}
          {access_token && <Image src={imageProfile} width={'40'} height={'40'} roundedCircle={true} />}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
