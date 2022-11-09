import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { ArrowBarRight } from "react-bootstrap-icons";
import Logo from "../assets/logo-rumah-sandar.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitLoginAdmin } from "../redux/user";
import {toast} from 'react-toastify'
const Login = () => {
  let [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    dispatch(submitLoginAdmin(loginForm)).then(() => {
      navigate("/table-volunteer")

      toast('Kamu berhasil login!', {
        position: "top-center",
        autoClose: 3000,
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
    <>
      <Container className="form-container">
        <Form className="form shadow" onSubmit={submitHandler}>
          <div className="form-content">
            <h3 className="form-title">Masuk</h3>
            <img className="center" src={Logo} width={"200"} />
            <div className="form-group mt-3">
              <label>Masukan Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="masukan email"
                onChange={(e) => {
                  setLoginForm({ ...loginForm, email: e.target.value });
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Kata Sandi</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="masukan sandi"
                onChange={(e) => {
                  setLoginForm({ ...loginForm, password: e.target.value });
                }}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
              Masuk
              </button>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Login;
