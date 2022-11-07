import { Container, Form, Button, Card, Modal, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ArrowBarRight, ArrowBarLeft } from 'react-bootstrap-icons';

const RegisterAdik = () => {
  const navigate = useNavigate();
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <h3 className="text-center">Register as Orphans</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Fullname</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Oprhanages</Form.Label>
              <Form.Select aria-label="Default select example">
                <option selected disabled>
                  Select
                </option>
                <option value="1">Panti Asuhan YAI</option>
                <option value="2">Panti Asuhan Dorkas</option>
                <option value="3">Panti Asuhan Al-Aqsha</option>
                <option value="3">Panti Yatim Indonesia</option>
                <option value="3">DLL</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" className="me-3">
              Submit <ArrowBarRight />
            </Button>
            <Button variant="secondary" type="submit" onClick={() => navigate('/')}>
              Back <ArrowBarLeft />
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegisterAdik;
