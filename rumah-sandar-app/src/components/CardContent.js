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
    //cardcontent
    dispatch(fetchClassCategories()).unwrap().then(data => console.log(data, "===="))
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  // if(!dataClassCategories){
  //   <h1>Loading</h1>
  // }
  return (
    <>
      <Container className="content-donasi mt-5 shadow">
        <h2><b>Donasi</b></h2>
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
