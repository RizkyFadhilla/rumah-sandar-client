import { Container, Card, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrphanages } from '../redux/user';

const CardPanti = () => {
  const dispatch = useDispatch();
  const { dataOrphanages } = useSelector((state) => {
    return state.user;
  });
  useEffect(() => {
    dispatch(fetchOrphanages());
  }, []);

  return (
    <Container className="content-panti mt-5 shadow mb-5">
      <h2 className="text-center mb-4">
        <b>Panti Asuhan</b>
      </h2>
      <Row className="ms-5">
        {dataOrphanages.map((e) => {
          return (
            <Col className="col-4">
              <Card style={{ width: '18rem' }} className="text-center mb-4">
                <Card.Img variant="top" src={e.imageUrl} style={{ objectFit: 'cover', height: '250px' }} />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>{e.personInCharge}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardPanti;
