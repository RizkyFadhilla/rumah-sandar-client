import { Container, Card, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrphanages } from '../redux/user';

const CardPanti = () => {
  const dispatch = useDispatch()
  const {dataOrphanages} = useSelector((state) => {
    return state.user
  })
  useEffect(() => {
    dispatch(fetchOrphanages())
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <Container className='content-panti mt-5'>
      <h2>Panti Asuhan</h2>
      <Row className="mt-3">
        <Slider {...settings}>
          {dataOrphanages.map((e) => {
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
