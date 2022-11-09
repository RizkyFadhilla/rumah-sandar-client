import { Container, ListGroup, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DetailVolunteer = () => {
  return (
    <Container className="mt-5 text-center col-3" style={{ height: 500 }}>
      <h3>Masuk Volunteer</h3>
      {/* <Card style={{ width: '18rem' }} className="shadow">
        <Card.Header style={{ backgroundColor: '#ffbe76', color: 'white' }}>
          <b>Detail Pengguna</b>
        </Card.Header>
        <Card.Body></Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <b>Nama Lengkap: </b>
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Email: </b>
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Pendidikan Terakhir: </b>
          </ListGroup.Item>
          <ListGroup.Item>
            <b>LinkedIn: </b>
          </ListGroup.Item>
        </ListGroup>
      </Card> */}
    </Container>
  );
};

export default DetailVolunteer;
