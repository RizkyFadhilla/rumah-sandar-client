import { Container, Row, Col, Image } from 'react-bootstrap';
import Logo from '../assets/content.png'

const ContentLandingPage = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className='col-8'>
            <h3>Selamat Datang di Rumah Sandar</h3>
            <p>Tempat belajar untuk adik-adik yang berada di bawah naungan yayasan panti asuhan di seluruh Indonesia.</p>
          </Col>
          <Col className='col-4'>
            <Image src={Logo} width={'400'}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContentLandingPage;
