import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../assets/content.png";

import {
  checkLoginUserData,
  checkLoginUserMatch,
} from "../redux/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardMatch from "./CardMatch";

const ContentLandingPageOrphan = () => {
  let dispatch = useDispatch();
  let noMatch = true;
  const {
    checkLoginUserMatchData,
    loginUserDataNow,
    checkLoginUserLoading,
  } = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    dispatch(checkLoginUserMatch()).then(() => {
      return checkLoginUserData();
    });
  }, []);
  
  if (checkLoginUserLoading) {
    <h1>Mohon Di tunggu</h1>;
  }
  if (checkLoginUserMatchData.length > 0) {
    noMatch = false;
  } 
  return (
    <>
      <Container className="content-landing mt-5 shadow">
        <Row>
          <Col className="col-8 mt-5">
            <h3>
              <b>Selamat Datang {loginUserDataNow.fullName} di Rumah Sandar</b>
            </h3>
            <h6>
              <em>
                Tempat belajar untuk adik-adik yang berada di bawah naungan
                yayasan panti asuhan di seluruh Indonesia.
              </em>
            </h6>
            <br></br>
            <p>
              Rumah Sandar adalah komunitas e-learning nirlaba untuk anak-anak
              yang terdaftar di panti asuhan.<br></br>Merupakan wadah untuk
              menjembatani para relawan muda di Indonesia untuk melakukan
              bimbingan non formal <br></br> kepada anak yatim. Sesuai dengan
              namanya, Rumah Sandar adalah tempat bersandarnya anak-anak yatim,
              tidak hanya untuk pelengkap pendidikan mereka, tetapi juga untuk
              mendapatkan harapan untuk meraih masa depan yang cerah terlepas
              dari situasi mereka. <br></br>
            </p>
          </Col>
          <Col className="col-4">
            <Image src={Logo} width={"350"} />
          </Col>
        </Row>
      </Container>
      {noMatch && <CardMatch />}
    </>
  );
};

export default ContentLandingPageOrphan;
