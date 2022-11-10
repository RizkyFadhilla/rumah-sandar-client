import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchDonation, fetchClassCategories } from "../redux/user";

export default function CardMaterial() {
  const dispatch = useDispatch();

  const { dataClassCategories } = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    dispatch(fetchClassCategories());
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      {localStorage.getItem("role") === "orphan" && (
        <Container className="content-donasi mt-5 p-5">
          <h2
            className="mb-4"
          >Materi Pembelajaran</h2>
          <Slider {...settings}>
            {dataClassCategories?.map((e) => {
              return (
                <div>
                  <Card style={{
                    width: "18rem",
                  }}
                    className="text-center">
                    <Card.Img variant="top" src={e.imgUrl} style={{ objectFit: "cover", height: "250px" }} />
                    <Card.Body>
                      <Card.Title
                        className="mb-4"
                      >
                        {e.name}</Card.Title>
                      <Button variant="primary"
                        href={e.link}
                        target={"_blank"}
                      >
                        Akses
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </Container>
      )
      }
    </>
  );
}
