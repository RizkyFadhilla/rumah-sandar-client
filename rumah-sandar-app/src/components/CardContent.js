import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";
import { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDonation,
  fetchClassCategories,
  checkLoginUserData,
} from "../redux/user";
// import DetailDonation from "./DonationDetailPage";
import { useNavigate } from "react-router-dom";

const CardContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataDonation, dataClassCategories, loginUserDataNow } = useSelector(
    (state) => {
      return state.user;
    }
  );

  useEffect(() => {
    dispatch(fetchDonation())
      .then(() => {
        return dispatch(fetchClassCategories());
      })
      .then(() => {
        dispatch(checkLoginUserData());
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  if (!dataDonation) {
    <h1>Loading</h1>;
  }
  return (
    <>
      {loginUserDataNow?.role !== "orphan" && (
        <Container className="content-donasi mt-5 shadow">
          <h2 className="text-center">
            <b>Donasi</b>
          </h2>
          <Slider {...settings} className="ms-3 me-5">
            {dataDonation?.map((element) => {
              let linkDonation = `https://invoice-staging.xendit.co/donation/${element.on_demand_link}`;
              return (
                <div>
                  <Card style={{ width: "18rem" }} className="text-center ms-5">
                    <Card.Img
                      variant="top"
                      src={element.imgUrl}
                      style={{ objectFit: "cover", height: "250px" }}
                    />
                    <Card.Body className="">
                      <Card.Title>{element.name}</Card.Title>
                      <Card.Text>{element.on_demand_link}</Card.Text>
                      <Button
                        variant="primary"
                        // href={linkDonation}
                        onClick={() =>
                          navigate("/detail-donation/" + element.id)
                        }
                      >
                        detail
                      </Button>
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
