import { Container, Card, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CardPanti = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/orphanages')
      .then((response) => response.json())
      .then((data) => setData(data));
  });
  return (
    <Container>
      <h2>Panti Asuhan</h2>
      <Row className="mt-3">
        {data.map((e) => {
          return (
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={e.imageUrl} />
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
