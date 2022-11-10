import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Image,
  ListGroup,
  Modal,
} from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVolunteer } from "../redux/user";
import { useParams } from "react-router-dom";
import { useState } from "react";

const DetailVolunteer = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  let { dataVolunteer } = useSelector((state) => {
    return state.user;
  });
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVolunteer());
  }, []);

  const detail = dataVolunteer?.filter((el) => el.id == id);

  return (
    <Container className="mt-5 text-center col-3">
      <Card style={{ width: "18rem" }} className="shadow">
        <Card.Header style={{ backgroundColor: "#ffbe76", color: "white" }}>
          <b>Detail Relawan</b>
        </Card.Header>
        <Card.Body>
          <Card.Img src={detail[0]?.imageUrl} />
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <b>Nama Lengkap: </b>
            {detail[0]?.fullName}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Email: </b>
            {detail[0]?.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Pendidikan Terakhir: </b>
            {detail[0]?.lastEducation}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>LinkedIn: </b>
            {detail[0]?.linkedinUrl}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Status: </b>
            {detail[0]?.verified ? "Verified" : "Not Verified"}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>
              CV :{" "}
              <a href="#" onClick={handleShow}>
                Lihat CV
              </a>
            </b>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <b>CV : </b>
            {detail[0]?.fullName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: "18rem" }} className="shadow">
            <Card.Body>
              <Card.Img
                src={detail[0]?.curriculumVitae}
                className="align-center"
              />
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DetailVolunteer;
