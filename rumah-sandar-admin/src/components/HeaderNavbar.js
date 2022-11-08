import { Container, Nav, Navbar } from 'react-bootstrap';



const HeaderNavbar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Rumah Sandar - Admin Panel</Navbar.Brand>
        <Nav className="">
          <Nav.Link  href="#">Ke Table Adik</Nav.Link>
          {/* <Nav.Link href="#features">Register</Nav.Link> */}
          <Nav.Link href="#pricing">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
