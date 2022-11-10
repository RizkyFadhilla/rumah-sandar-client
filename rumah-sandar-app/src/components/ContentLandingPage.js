import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../assets/content.png";
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon } from "react-share"
// const shareUrl = "https://rumah-sandar.web.app/";
const shareUrl = "https://153e-202-165-46-22.ap.ngrok.io";


const ContentLandingPage = () => {


  return (
    <>
      <Container className="content-landing mt-5 shadow">
        <Row>
          <Col className="col-8 mt-5" style={{ paddingLeft: "40px", paddingRight: "10px" }}>
            <h3 className="mb-3">
              <b>Tentang Rumah Sandar</b>
            </h3>
            <h6>
              <em>
                Komunitas belajar online <i>non profitable</i>, khusus untuk adik-adik yang berada di bawah naungan
                yayasan panti asuhan di Indonesia.
              </em>
            </h6>
            <br></br>
            <p>
              Bukan hanya untuk belajar, sesuai dengan namanya, Rumah Sandar adalah tempat bernaung yang bisa diandalkan, dimana adik-adik asuh akan merasa nyaman. Tidak hanya untuk pelengkap pendidikan mereka, tapi juga untuk
              mendapatkan harapan untuk meraih masa depan yang cerah terlepas dari situasi apapun.
            </p>
            <p>
              Rumah Sandar tidak memungut biaya apapun kepada adik asuh dan yayasan panti asuhan, namun, kami tetap mengedepankan kualitas pembelajaran, sehingga pembelajaran akan dilakukan secara intensif (<i>one-on-one</i>).
            </p>
          </Col>
          <Col className="col-4">
            <Image src={Logo} width={"350"} />
          </Col>

          <Container className="text-center">
            <hr></hr>
            <div>
              <p className="mb-3">
                Bagikan informasi tentang Rumah Sandar
              </p>
            </div>
            <div>
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={30} round className="me-3" />
              </TwitterShareButton>

              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={30} round className="me-3" />
              </FacebookShareButton>

              <WhatsappShareButton url={shareUrl}
                // quote={title} 
                separator=":: ">
                <WhatsappIcon size={30} round className="me-3" />
              </WhatsappShareButton>
            </div>
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default ContentLandingPage;
