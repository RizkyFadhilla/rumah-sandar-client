import { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitLogin } from '../redux/user';


const Login = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })

  function changeHandler(e) {
    e.preventDefault()

    let data = e.target.name
    let value = e.target.value

    let newLoginForm = {
      ...loginForm
    }

    newLoginForm[data] = value
    setLoginForm(newLoginForm)
  }

  async function submitHandler(e) {
    e.preventDefault()

    dispatch(submitLogin(loginForm))
    .then((data) => {
      navigate('/')
    })
    
  }

  return (
    <Container className='mt-5'>
      <Card>
        <Card.Body>
        <h3 className='text-center'>Login</h3>
          <Form onSubmit={submitHandler} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email' value={loginForm.email} onChange={changeHandler}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name='password' value={loginForm.password} onChange={changeHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
            <Button variant="primary" type="submit"  >
              Submit 
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
