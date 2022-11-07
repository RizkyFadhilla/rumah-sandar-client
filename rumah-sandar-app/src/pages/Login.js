import { Container, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {ArrowBarRight, ArrowBarLeft} from 'react-bootstrap-icons'

const Login = () => {
  const navigate = useNavigate()
  return (
    <Container className='mt-5'>
      <Card>
        <Card.Body>
        <h3 className='text-center'>Login</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
            <Button variant="primary" type="submit" className='me-3'>
              Submit <ArrowBarRight/>
            </Button>
            <Button variant="secondary" type="submit" onClick={() => navigate('/')}>
              Back <ArrowBarLeft/>
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
