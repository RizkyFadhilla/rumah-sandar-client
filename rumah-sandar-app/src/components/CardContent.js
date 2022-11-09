import { Container, Card, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDonation, fetchClassCategories } from '../redux/user';

const CardContent = () => {
  const dispatch = useDispatch();
  const { dataDonation } = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    dispatch(fetchDonation());
    dispatch(fetchClassCategories())
      .unwrap()
      .then((data) => console.log(data, '===='));
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("id-ID", { year: 'numeric', month: 'short', day: 'numeric' })
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  if (!dataDonation) {
    <h1>Loading</h1>
  }
  return (
    <>
      {localStorage.getItem('role') !== 'orphan' && (
        <Container className="content-donasi mt-5 shadow">
          <h2 className='text-center mb-4'>
            <b
            >Donasi</b>
          </h2>
          <Slider {...settings} className='ms-3 me-5'>
            {dataDonation?.map((e) => {
              let linkDonation = `https://invoice-staging.xendit.co/donation/${e.on_demand_link}`;
              return (
                <div>
                  <Card style={{ width: '18rem' }} className="text-center ms-5">
                    <Card.Img variant="top" src={e.imgUrl} style={{ objectFit: "cover", height: "250px" }} />
                    <Card.Body className=''>
                      <Card.Title>{e.name}</Card.Title>
                      <Row>
                        <Col>
                          <Card.Text>Total: Rp.5000 {e.totalAmount}</Card.Text>
                        </Col>
                        <Col>
                          <p>{formatDate(e.validUntil)}</p>
                        </Col>
                      </Row>
                      <Card.Link href={linkDonation}>Donasi</Card.Link>
                      <Card.Link href="#">Lihat detail</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </Container>
      )}
    </>
  );
};

export default CardContent;
