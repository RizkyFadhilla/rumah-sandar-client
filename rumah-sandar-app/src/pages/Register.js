import { Container, Form, Button, Card, Modal, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBarRight, ArrowBarLeft } from 'react-bootstrap-icons';

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <h3 className="text-center">Register as Volunteer</h3>
          <p>
            <a href="#" onClick={handleShow}>
              Terms and Condition
            </a>
          </p>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fullname</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>CV</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Education</Form.Label>
              <Form.Select aria-label="Default select example">
                <option selected disabled>
                  Select
                </option>
                <option value="1">SMA</option>
                <option value="2">D3</option>
                <option value="3">S1</option>
                <option value="3">S2</option>
                <option value="3">S3</option>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Condition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.
          <p>
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <h5>S&K</h5>
          <ul>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check type={type} id={`default-${type}`} label={`Saya Setuju`} />
              </div>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Dimengerti
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Register;
