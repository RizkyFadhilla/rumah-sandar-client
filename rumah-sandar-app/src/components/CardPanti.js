import { Container, Card, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';

const CardPanti = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/orphanages')
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <Container>
      <h2>Panti Asuhan</h2>
      <Row className="mt-3">
        <Slider {...settings}>
          {data.map((e) => {
            return (
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={e.imageUrl} style={{ objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>{e.personInCharge}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Slider>
      </Row>
    </Container>
  );
};

export default CardPanti;
