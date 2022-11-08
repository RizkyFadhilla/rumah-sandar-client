import { useEffect } from 'react';
import { Container, Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LogoRumahSandar from '../assets/logo-rumah-sandar.png';
import { fetchClassCategories, requestMatchOrphan } from '../redux/user';

const HeaderNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const{ loginUser } = useSelector((state) => {
    return state.user
  })


  function logoutHandler(e) {
    e.preventDefault();

    localStorage.clear()
    dispatch(fetchClassCategories())
    navigate('/')
    
  }

  function requestMatch(e) {
    e.preventDefault();
    
    dispatch(requestMatchOrphan()).then(() => {
      //swal disini kalo request matchnya udah disampaikan
      console.log('match requested')

    })
  }

  // const access_token = loginUser?.access_token
  // const role = loginUser.sendData?.role
  // const isMacthed = loginUser.sendData?.matchStatus
  // const username = loginUser.sendData?.fullName
  // const imageProfile = loginUser.sendData?.imageUrl
  const access_token = localStorage.access_token
  const role = localStorage.role
  const isMatched = localStorage.isMatched
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

          {access_token && role === 'volunteer' && isMatched === 'notMatch' && <Nav.Link onClick={() => navigate('/orphansList')}>Daftar Adik</Nav.Link>}
          {access_token && isMatched === 'alreadyMatch' && <Nav.Link onClick={() => navigate('/schedule')}>Jadwal Kelas</Nav.Link>}
          {access_token && isMatched === 'notMatch' && role === 'orphan' && <Nav.Link onClick={requestMatch}>Minta Pengajar</Nav.Link>}
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
