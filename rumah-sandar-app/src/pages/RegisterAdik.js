import { useState } from 'react';
import { Container, Form, Button, Card, Modal, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ArrowBarRight, ArrowBarLeft } from 'react-bootstrap-icons';

const RegisterAdik = () => {
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    fullName: "",
    imageUrl: "",
    OrphanageId: 0
  })

  function handleChange(e) {
    e.preventDefault()

    let data = e.target.name
    let value = e.target.value

    let newRegisterForm = {
      ...registerForm
    }

    newRegisterForm[data] = value
    setRegisterForm(newRegisterForm)
  }

  console.log(registerForm);

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <h3 className="text-center">Daftar sebagai adik asuh</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={registerForm.email}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                value={registerForm.fullName}
                onChange={handleChange}
                name="fullName"
                type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={registerForm.password}
                onChange={handleChange}
                name="password"
                type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                value={registerForm.imageUrl}
                onChange={handleChange}
                name="imageUrl"
                type="file" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Oprhanages</Form.Label>
              <Form.Select
                onChange={handleChange}
                name="OrphanageId"
                value={registerForm.OrphanageId}
                aria-label="Default select example">
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
