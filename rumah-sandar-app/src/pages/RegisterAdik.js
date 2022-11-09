import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {toast} from 'react-toastify'
import {
  Container,
  Form,
  Button,
  Card,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArrowBarRight, ArrowBarLeft } from "react-bootstrap-icons";
import { fetchOrphanages, submitRegisterOrphan } from "../redux/user";

const RegisterAdik = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //! Fetch data orphanages untuk select option
  const { dataOrphanages } = useSelector((state) => {
    return state.user;
  });

  //! Biar langsung render data orphanages kalo page kebuka
  useEffect(() => {
    dispatch(fetchOrphanages());
  }, []);

  //! initial state input type form biasa
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    fullName: "",
    // imageUrl: "",
    OrphanageId: 1,
  });
  // console.log(registerForm);

  //! initial state input type file
  const [imageUrl, setImageUrl] = useState("");
  // console.log(imageUrl);

  //! handlechange buat ambil value di form
  function handleChange(e) {
    e.preventDefault();
    // console.log(e.target.files)
    let data = e.target.name;
    let value = e.target.value;

    let newRegisterForm = {
      ...registerForm,
    };
    newRegisterForm[data] = value;
    setRegisterForm(newRegisterForm);
  }

  // const FileUploader = ({ onFileSelect }) => {
  //   const fileInput = useRef(null);

  //   const handleFileInput = (e) => {
  //     // handle validations
  //     onFileSelect(e.target.files[0]);
  //   };
  // };

  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", registerForm.email);
    formData.append("password", registerForm.password);
    formData.append("fullName", registerForm.fullName);
    formData.append("OrphanageId", registerForm.OrphanageId);
    formData.append("imageUrl", imageUrl);
    dispatch(submitRegisterOrphan(formData))
    .unwrap()
    .then(() => {
      navigate("/")
      toast('Kamu berhasil Register!, Tunggu Konfirmasi admin yaa', {
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
    .catch((err) => {
      // console.log(err + 'dikomponen');
      // throw err
      toast(`${err.message}`, {
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
  }

  console.log(dataOrphanages);

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <h3 className="text-center">Daftar sebagai adik asuh</h3>
          <Form onSubmit={handleSubmit}>
            {/* EMAIL ADDRESS */}
            <Form.Group className="mb-3">
              <Form.Label>Alamat Email</Form.Label>
              <Form.Control
                // value={registerForm.email}
                // onChange={handleChange}
                onChange={(e) => {
                  setRegisterForm({ ...registerForm, email: e.target.value });
                }}
                name="email"
                type="email"
                placeholder="Masukan email"
              />
            </Form.Group>

            {/* USERNAME*/}
            <Form.Group className="mb-3">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                // value={registerForm.fullName}
                // onChange={handleChange}
                onChange={(e) => {
                  setRegisterForm({
                    ...registerForm,
                    fullName: e.target.value,
                  });
                }}
                name="fullName"
                type="text"

                placeholder="Nama Lengkap"
              />
            </Form.Group>

            {/* PASSWORD */}
            <Form.Group className="mb-3">
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control
                // value={registerForm.password}
                // onChange={handleChange}
                onChange={(e) => {
                  setRegisterForm({
                    ...registerForm,
                    password: e.target.value,
                  });
                }}
                name="password"
                type="password"
                placeholder="Masukan sandi"
              />
            </Form.Group>

            {/* IMAGE URL */}
            <Form.Group className="mb-3">
              <Form.Label>Gambar</Form.Label>
              <Form.Control
                // value={imageUrl}
                // onChange={handleChange}
                // onChange={(file) => setImageUrl(file)}
                onChange={(e) => setImageUrl(e.target.files[0])}
                name="imageUrl"
                type="file"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Panti Asuhan</Form.Label>
              <Form.Select
                // onChange={handleChange}
                // value={registerForm.OrphanageId}
                onChange={(e) => {
                  setRegisterForm({
                    ...registerForm,
                    OrphanageId: e.target.value,
                  });
                }}
                name="OrphanageId"
                aria-label="Default select example"
              >
                <option disabled selected >Pilih Satu</option>
                {dataOrphanages?.map((orphanage) => {
                  return (
                    <option value={orphanage.id} key={orphanage.id}>
                      {orphanage.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Button
              variant="secondary"
              type="submit"
              className="me-3"
              onClick={() => navigate("/")}
            >
              Kembali
            </Button>
            <Button variant="primary" type="submit">
              Daftar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegisterAdik;
