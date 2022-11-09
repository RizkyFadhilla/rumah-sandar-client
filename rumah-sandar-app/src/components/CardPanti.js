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
    <Container className="content-panti mt-5 shadow" style={{ justifyContent: "center", alignItems: "center" }}>
      <h2 className="text-center">
        <b>Panti Asuhan</b>
      </h2>
      <div
        style={{
          borderRadius: 10,
          marginTop: 30,
          alignItems: 'center',
          backgroundColor: 'white',
          maxHeight: 590,
          overflowY: 'scroll',
        }}
      >
        {dataOrphanages.map((e) => {
          return (
            <Card style={{ width: '18rem' }} className="text-center ms-5 mb-4">
              <Card.Img variant="top" src={e.imageUrl} style={{ objectFit: 'cover', height: '250px' }} />
              <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>{e.personInCharge}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default CardPanti;
