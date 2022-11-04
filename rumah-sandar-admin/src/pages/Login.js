import { Container, Form } from 'react-bootstrap';
import {ArrowBarRight} from 'react-bootstrap-icons'
import Logo from '../assets/logo-rumah-sandar.png'
const Login = () => {
  return (
    <>
      <Container className="form-container">
        <Form className="form shadow">
          <div className="form-content">
            <h3 className="form-title">Sign In</h3>
            <img className="center" src={Logo} width={'200'}/>
            <div className="form-group mt-3">
              <label>Email Address</label>
              <input type="email" className="form-control mt-1" placeholder="Enter email" />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input type="password" className="form-control mt-1" placeholder="Enter password" />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login <ArrowBarRight/>
              </button>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Login;
