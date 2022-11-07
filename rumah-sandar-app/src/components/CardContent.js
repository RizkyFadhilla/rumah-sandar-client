import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDonation, fetchClassCategories } from '../redux/user';

const CardContent = () => {
  const dispatch = useDispatch();
  const { dataDonation } = useSelector((state) => {
    return state.user;
  });
  const { dataClassCategories } = useSelector((state) => {
    return state.user;
  });
  useEffect(() => {
    dispatch(fetchDonation());
    dispatch(fetchClassCategories());
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      {localStorage.getItem('role') === 'orphan' && (
        <Container className="content-donasi mt-5">
          <h2>Materi</h2>
          <Row>
            <Slider {...settings}>
              {dataClassCategories.map((e) => {
                return (
                  <div>
                    <Col>
                      <Card style={{ width: '18rem' }} className="text-center">
                        <Card.Img variant="top" src={e.imgUrl} />
                        <Card.Body>
                          <Card.Title>{e.name}</Card.Title>
                          <Button variant="primary" href={e.link}>
                            Download Materi
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </div>
                );
              })}
            </Slider>
          </Row>
        </Container>
      )}
      <Container className="content-donasi mt-5">
        <h2>Donasi</h2>
        <Row>
          <Slider {...settings}>
            {dataDonation.map((e) => {
              let linkDonation = `https://invoice-staging.xendit.co/donation/${e.on_demand_link}`;
              return (
                <div>
                  <Col>
                    <Card style={{ width: '18rem' }} className="text-center">
                      <Card.Img variant="top" src={e.imgUrl} />
                      <Card.Body>
                        <Card.Title>{e.name}</Card.Title>
                        <Card.Text>{e.on_demand_link}</Card.Text>
                        <Button variant="primary" href={linkDonation}>
                          Donate
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
              );
            })}
          </Slider>
        </Row>
      </Container>
    </>
  );
};

export default CardContent;
