import { Container, Card, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CardContent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/donations')
      .then((response) => response.json())
      .then((data) => setData(data));
  })
  return (
    <Container className="mb-5">
      <h2>Donasi</h2>
      <Row>
        {data.map((e) => {
          return (
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={e.imgUrl} />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>{e.on_demand_link}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default CardContent;
