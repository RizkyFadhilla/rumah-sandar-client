import { Container, Form, Button, Card, Modal, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitRegisterVolunteer } from '../redux/user';
import { useDispatch } from 'react-redux';
import {toast} from 'react-toastify'

const Register = () => {
  const [isChecked, setChecked] = useState(false);
  const handleChange = (event) => {
    if (event.target.checked) {
      setChecked(true)
    } else {
      setChecked(false)
    }
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerForm, setRegisterForm] = useState({
    fullName: '',
    email: '',
    password: '',
    linkedinUrl: '',
    lastEducation: '',
  });
  const [imageUrl, setImageUrl] = useState('');
  const [curriculumVitae, setCurriculumVitae] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('email', registerForm.email);
    formData.append('password', registerForm.password);
    formData.append('fullName', registerForm.fullName);
    formData.append('linkedinUrl', registerForm.linkedinUrl);
    formData.append('imageUrl', imageUrl);
    formData.append('curriculumVitae', curriculumVitae);
    formData.append('lastEducation', registerForm.lastEducation);
    console.log(formData);
    toast('Akunmu sudah terdaftar, silahkan tunggu verifikasi ya!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    dispatch(submitRegisterVolunteer(formData)).then(() => navigate('/'));
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body style={{padding: 40}}>
          <h3 className="text-center">Daftar sebagai Pengajar</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Alamat Email</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setRegisterForm({ ...registerForm, email: e.target.value });
                }}
                name="email"
                type="email"
                placeholder="masukan email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setRegisterForm({
                    ...registerForm,
                    fullName: e.target.value,
                  });
                }}
                name="fullName"
                placeholder="masukan nama lengkap"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Kata Sandi</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setRegisterForm({
                    ...registerForm,
                    password: e.target.value,
                  });
                }}
                name="password"
                type="password"
                placeholder="masukan password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>linkedin Url</Form.Label>
              <Form.Control
                type="url"
                onChange={(e) => {
                  setRegisterForm({
                    ...registerForm,
                    linkedinUrl: e.target.value,
                  });
                }}
                name="linkedinUrl"
                placeholder="masukan linkedin Url"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Foto</Form.Label>
              <Form.Control name="imageUrl" type="file" onChange={(e) => setImageUrl(e.target.files[0])} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>CV</Form.Label>
              <Form.Control name="curriculumVitae" type="file" onChange={(e) => setCurriculumVitae(e.target.files[0])} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pendidikan Terakhir</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setRegisterForm({
                    ...registerForm,
                    lastEducation: e.target.value,
                  });
                }}
                name="lastEducation"
                placeholder="masukan pendidikan terakhir"
              >
                <option selected disabled>
                  pilih satu
                </option>
                <option value="SMA">SMA</option>
                <option value="Diploma 3">Diploma 3</option>
                <option value="S1">S1</option>
                <option value="S2">S2</option>
                <option value="S3">S3</option>
                <option value="Lainnya">Lainnya</option>
              </Form.Select>
            </Form.Group>
            <p>
              <a href="#" onClick={handleShow}>
                Syarat dan Ketentuan
              </a>
            </p>
            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check type={type} id={`default-${type}`} label={`Saya Setuju dengan S&K`} value={isChecked} onChange={handleChange} />
                </div>
              ))}
            </Form>
            <Button variant="secondary" type="submit" className="me-3" onClick={() => navigate('/')}>
              Kembali
            </Button>
            <Button variant="primary" type="submit" disabled={!isChecked}>
              Daftar
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Syarat dan Ketentuan</Modal.Title>
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
