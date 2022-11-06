import { Container, Card, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';

const CardContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/donations')
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
      <h2> Multiple items </h2>
      <Row>
        <Slider {...settings}>
          {data.map((e) => {
            return (
              <div>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={e.imgUrl} />
                    <Card.Body>
                      <Card.Title>{e.name}</Card.Title>
                      <Card.Text>{e.on_demand_link}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Slider>
      </Row>
    </Container>
  );
};

export default CardContent;
