import {
  Container,
  Form,
  Button,
  Card,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBarRight, ArrowBarLeft } from "react-bootstrap-icons";
import { submitRegisterVolunteer } from "../redux/user";
import { useDispatch } from "react-redux";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    password: "",
    linkedinUrl: "",
    lastEducation: "",
  });
  const [imageUrl, setImageUrl] = useState("");
  const [curriculumVitae, setCurriculumVitae] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", registerForm.email);
    formData.append("password", registerForm.password);
    formData.append("fullName", registerForm.fullName);
    formData.append("linkedinUrl", registerForm.linkedinUrl);
    formData.append("imageUrl", imageUrl);
    formData.append("curriculumVitae", curriculumVitae);
    formData.append("lastEducation", registerForm.lastEducation);
    console.log(formData);
    dispatch(submitRegisterVolunteer(formData)).then(() => navigate("/"));
  }

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
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setRegisterForm({ ...registerForm, email: e.target.value });
                }}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setRegisterForm({
                    ...registerForm,
                    fullName: e.target.value,
                  });
                }}
                name="fullName"
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setRegisterForm({
                    ...registerForm,
                    password: e.target.value,
                  });
                }}
                name="password"
                type="password"
                placeholder="Enter password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>linkedinUrl</Form.Label>
              <Form.Control
                type="url"
                onChange={(e) => {
                  setRegisterForm({
                    ...registerForm,
                    linkedinUrl: e.target.value,
                  });
                }}
                name="linkedinUrl"
                placeholder="Enter linkedin Url"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="imageUrl"
                type="file"
                onChange={(e) => setImageUrl(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>CV</Form.Label>
              <Form.Control
                name="curriculumVitae"
                type="file"
                onChange={(e) => setCurriculumVitae(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Education</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setRegisterForm({
                    ...registerForm,
                    lastEducation: e.target.value,
                  });
                }}
                name="lastEducation"
                placeholder="Enter Your Last Education"
              >
                <option selected disabled>
                  Select
                </option>
                <option value="SMA">SMA</option>
                <option value="D3">D3</option>
                <option value="S1">S1</option>
                <option value="S2">S2</option>
                <option value="S3">S3</option>
                <option value="Lainnya">Other</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit" className="me-3">
              Submit <ArrowBarRight />
            </Button>
            <Button
              variant="secondary"
              type="submit"
              onClick={() => navigate("/")}
            >
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
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
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Saya Setuju`}
                />
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
