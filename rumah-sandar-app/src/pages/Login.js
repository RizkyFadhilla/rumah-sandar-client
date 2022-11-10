import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitLoginOrphan } from "../redux/user";
import { ArrowRightSquare, ArrowLeftSquare } from "react-bootstrap-icons";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  function changeHandler(e) {
    e.preventDefault();

    let data = e.target.name;
    let value = e.target.value;

    let newLoginForm = {
      ...loginForm,
    };

    newLoginForm[data] = value;
    setLoginForm(newLoginForm);
  }

  async function submitHandler(e) {
    e.preventDefault();

    dispatch(submitLoginOrphan(loginForm))
      .unwrap()
      .then((result) => {
        return toast("Akun kamu berhasil masuk!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .then(() => navigate("/"))
      .catch((error) => {
        return toast.error(`${error.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  }

  return (
    <Container className="mt-5">
      <Card className="shadow">
        <Card.Body>
          <h3 className="text-center">Login</h3>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={loginForm.email}
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={loginForm.password}
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button
              className="me-3"
              variant="secondary"
              type="submit"
              onClick={() => navigate("/")}
            >
              Back
            </Button>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
